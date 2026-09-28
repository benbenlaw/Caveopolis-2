//Server Events

 //true_at_and_below value from the lowest stone level ben dont forget !
const LAYERS = [
    {
        //Red, Orange and Yellow
        tag: 'layer_1',
        charm: 'caveopolis:depth_charm_i',
        minY: 216
    },
    {
        //Lime, Green
        tag: 'layer_2',
        charm: 'caveopolis:depth_charm_ii',
        minY: 184
    },
    {
        //Cyan, Light Blue, Blue
        tag: 'layer_3',
        charm: 'caveopolis:depth_charm_iii',
        minY: 136
    },
    {
        //Purple, Magenta, Pink
        tag: 'layer_4',
        charm: 'caveopolis:depth_charm_iv',
        minY: 88
    },
    {
        //Brown, Black
        tag: 'layer_5',
        charm: 'caveopolis:depth_charm_v',
        minY: 56
    },
    {
        //Gray, Light Gray, White
        tag: 'layer_6',
        charm: 'caveopolis:depth_charm_vi',
        minY: 8
    },
    {
        //Deepslate
        tag: 'layer_7',
        charm: 'caveopolis:depth_charm_vii',
        minY: 0
    }
]

const SPRAY_CAN_LAYER = {
    'colors:red_spray_can': 'layer_1',
    'colors:orange_spray_can': 'layer_1',
    'colors:yellow_spray_can': 'layer_1',
    'colors:lime_spray_can': 'layer_2',
    'colors:green_spray_can': 'layer_2',
    'colors:cyan_spray_can': 'layer_3',
    'colors:light_blue_spray_can': 'layer_3',
    'colors:blue_spray_can': 'layer_3',
    'colors:purple_spray_can': 'layer_4',
    'colors:magenta_spray_can': 'layer_4',
    'colors:pink_spray_can': 'layer_4',
    'colors:brown_spray_can': 'layer_5',
    'colors:black_spray_can': 'layer_5',
    'colors:gray_spray_can': 'layer_6',
    'colors:light_gray_spray_can': 'layer_6',
    'colors:white_spray_can': 'layer_6',
}

BlockEvents.rightClicked('minecraft:stone', event => {
    const player = event.player

    if (player.isCreative() || player.isSpectator()) return

    const stack = player.getMainHandItem()
    const itemId = stack.getId()

    const requiredTag = SPRAY_CAN_LAYER[itemId]
    if (!requiredTag) return

    if (!player.entityTags().contains(requiredTag)) {
        event.cancel()
        player.tell('§cYou need to reach that layer before using this color!')
    }
})


PlayerEvents.tick(event => {
    const player = event.player

    for (const layer of LAYERS) {
        if (
            player.getInventory().contains(layer.charm) &&
            !player.entityTags().contains(layer.tag)
        ) {
            player.entityTags().add(layer.tag)
            player.tell(`Unlocked ${layer.tag}!`)
        }
    }
})

PlayerEvents.tick(event => {
    const player = event.player

    if (player.isCreative() || player.isSpectator()) return

    let deepestAllowedY = 264

    for (const layer of LAYERS) {
        if (player.entityTags().contains(layer.tag)) {
            deepestAllowedY = layer.minY
        }
    }

    if (player.y < deepestAllowedY) {
        applyLayerPenalty(player)
    }
})

const EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority')
const BreakBlockEvent = Java.loadClass('net.neoforged.neoforge.event.level.block.BreakBlockEvent')

NativeEvents.onEvent(EventPriority.HIGHEST, BreakBlockEvent, event => {
    if (event.getLevel().isClientSide()) return

    const player = event.getPlayer()
    if (!player) return
    if (player.isCreative() || player.isSpectator()) return

    let deepestAllowedY = 264
    for (const layer of LAYERS) {
        if (player.entityTags().contains(layer.tag)) {
            deepestAllowedY = layer.minY
        }
    }

    if (event.getPos().getY() < deepestAllowedY) {
        event.setCanceled(true)
        player.tell('§cYou need a deeper charm to mine here!')
    }
})

function applyLayerPenalty(player) {
    player.potionEffects.add('minecraft:darkness', 100, 0)
    player.potionEffects.add('minecraft:slowness', 100, 5)
}



/*
PlayerEvents.loggedIn(event => {

    const player = event.player
    const server = player.server
 
    if ( player.entityTags().contains('has_spawned')) return

    player.tell('Please wait here...')
    
    
    server.scheduleInTicks(100, () => {
        server.runCommand(
            `execute as ${player.uuid} in caveopolis:caves run tp 0 320 0`
        )
    })

    server.scheduleInTicks(120, () => {
        server.runCommand(
            `execute as ${player.uuid} in caveopolis:caves run fill 0 319 0 0 310 0 stone`
        )

        player.entityTags().add('has_spawned')
        player.tell('Dig Down and forget that hole to the top of the world excists...')
    })

})
*/

//All of the below is for the Sonar Cannon which is used to break bedrock and only Bedrock

const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $Identifier = Java.loadClass("net.minecraft.resources.Identifier")
const ClipContext = Java.loadClass("net.minecraft.world.level.ClipContext");
const HitResult = Java.loadClass("net.minecraft.world.phys.HitResult");
const ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes");
const SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents");
const SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
const SONAR_TAG = $TagKey.create($Registries.BLOCK, $Identifier.parse("caveopolis:sonar_breakable"))

const SPECIAL_DROPS = {
    'minecraft:bedrock': 'caveopolis:bedrock_shard',
    'caveopolis:toprock': 'minecraft:air'
}

function fireSonarCannon(event, improvedOnly) {
    const { player, level } = event

    if (level.isClientSide()) return

    const eyePos = player.getEyePosition()
    const look = player.getLookAngle()
    const range = 32
    const endPos = eyePos.add(look.x * range, look.y * range, look.z * range)
    const ctx = new ClipContext(eyePos, endPos, ClipContext.Block.OUTLINE, ClipContext.Fluid.NONE, player)
    const hit = level.clip(ctx)

    if (hit.getType() !== HitResult.Type.BLOCK) return

    const pos = hit.getBlockPos()
    const state = level.getBlockState(pos)

    if (!state["is(net.minecraft.tags.TagKey)"](SONAR_TAG)) return

    const blockId = BuiltInRegistries.BLOCK.getKey(state.getBlock()).toString()

    if (improvedOnly && blockId !== 'minecraft:bedrock') return

    const hitVec = hit.getLocation()
    const dist = eyePos.distanceTo(hitVec)
    const steps = Math.ceil(dist * 2)

    for (let i = 0; i <= steps; i++) {
        const t = i / steps
        level.spawnParticles(ParticleTypes.SONIC_BOOM, true,
            eyePos.x + (hitVec.x - eyePos.x) * t,
            eyePos.y + (hitVec.y - eyePos.y) * t,
            eyePos.z + (hitVec.z - eyePos.z) * t,
            1, 0, 0, 0, 0)
    }

    level.spawnParticles(ParticleTypes.SONIC_BOOM, true, pos.getX() + 0.5, pos.getY() + 0.5, pos.getZ() + 0.5, 3, 0.3, 0.3, 0.3, 0)
    level.playSound(null, pos.getX() + 0.5, pos.getY() + 0.5, pos.getZ() + 0.5, SoundEvents.WARDEN_SONIC_BOOM, SoundSource.HOSTILE, 1.0, 1.0)
    level.destroyBlock(pos, false)

    const dropId = SPECIAL_DROPS[blockId] ?? blockId
    player.give(Item.of(dropId, 1))

    event.cancel()
}

ItemEvents.rightClicked('caveopolis:sonar_cannon', event => fireSonarCannon(event, true))
ItemEvents.rightClicked('caveopolis:improved_sonar_cannon', event => fireSonarCannon(event, false))

const itemVoidSwaps = {
    'caveopolis:bedrock_shard': 'dimresources:dimensional_shard',
    'minecraft:stone': 'ae2:sky_stone_block'
}

ServerEvents.tick(event => {
    if (event.server.getTickCount() % 30 !== 0) return

    const minY = 0

    for (const level of event.server.getAllLevels()) {
        
        if (String(level.dimension).startsWith('skyblockbuilder:') && String(level.dimension).endsWith('_main')) {
            
            level.getEntities().forEach(entity => {
                if (entity.type !== 'minecraft:item') return
                if (entity.getY() >= minY) return

                const stack = entity.getItem()
                const sourceId = BuiltInRegistries.ITEM.getKey(stack.getItem()).toString()

                const rewardId = itemVoidSwaps[sourceId]
                if (!rewardId) return

                const player = entity.getOwner()
                if (!player) return

                entity.discard()
                player.give(Item.of(rewardId, stack.getCount()))
            })
        }
    }
})