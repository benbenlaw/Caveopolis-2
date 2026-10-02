Platform.getInfo('caveopolis').name = 'Caveopolis'

const MutableToolTier = Java.loadClass('dev.latvian.mods.kubejs.item.MutableToolTier')
const ToolMaterial = Java.loadClass('net.minecraft.world.item.ToolMaterial')

StartupEvents.registry("item", (event) => {

    //Misc
    event.create('caveopolis:stone_rod').tag('c:rods')
    event.create('caveopolis:growth_accelerator')
    event.create('caveopolis:rotten_bone')
    event.create('caveopolis:rotten_dust')
    event.create('caveopolis:suspicious_flint')
    event.create('caveopolis:suspicious_stick')
    event.create('caveopolis:moss_ball')
    event.create('caveopolis:charged_lapis')
    event.create('caveopolis:empty_heart')
    event.create('caveopolis:matter_nugget').tag(['c:nuggets/matter', 'c:nuggets'])
    event.create('caveopolis:matter_ingot').tag(['c:ingots/matter', 'c:ingots'])
    event.create('caveopolis:black_gold_nugget').tag(['c:nuggets/black_gold', 'c:nuggets'])
    event.create('caveopolis:black_gold_ingot').tag(['c:ingots/black_gold', 'c:ingots'])
    event.create('caveopolis:enhanced_crystaltine_nugget').tag(['c:nuggets/enhanced_crystaltine', 'c:nuggets'])
    event.create('caveopolis:enhanced_crystaltine_ingot').tag(['c:ingots/enhanced_crystaltine', 'c:ingots'])

    event.create('caveopolis:awakened_netherite_ingot').tag(['c:ingots/awakened_netherite_ingot', 'c:ingots'])

    event.create('caveopolis:shimmer_crystal')
    event.create('caveopolis:assembled_star')
    event.create('caveopolis:the_ultimate_template')
    event.create('caveopolis:creative_template')
    
    event.create('caveopolis:omnithium_mesh').maxStackSize(1).tag(['strainers:meshes', 'strainers:tier_9_meshes', 'castingtools:is_enhanceable'])

    colors.forEach(color => {
        event.create(`caveopolis:${color}_shimmer_crystal`).tag('caveopolis:colored_shimmer_crystals')
    })

    event.create('caveopolis:mystic_room_certus').displayName("Mystic Crystal").tooltip("Used with the placer, Whats inside?")
    event.create('caveopolis:mystic_room_amethyst').displayName("Mystic Crystal").tooltip("Used with the placer, Whats inside?")
    
    event.create('caveopolis:warden_chamber').displayName("The Warden's Chamber").tooltip("Used with the placer, Whats inside?")

    event.create('caveopolis:improvised_lava_drop', 'strainers:strainers_drop').fluid("caveopolis:improvised_lava")
    event.create('caveopolis:oil_drop', 'strainers:strainers_drop').fluid("caveopolis:oil")
    event.create('caveopolis:makeshift_fuel_drop', 'strainers:strainers_drop').fluid("caveopolis:makeshift_fuel")

    event.create('caveopolis:coin_mold').tag(['c:molds', 'casting:molds'])

    event.create('caveopolis:sonic_charge')
    event.create('caveopolis:sonar_cannon')
    event.create('caveopolis:improved_sonar_cannon')

    event.create('caveopolis:bedrock_shard')
    event.create('caveopolis:luminessence_shard')
    event.create('caveopolis:raw_black_iron')

    event.create('caveopolis:creative_shard')
    event.create('caveopolis:creative_ingot')
    event.create('caveopolis:the_creative_ingot')

    event.create('caveopolis:depth_charm_i').tag('c:charms').displayName('Depth Charm I')
    event.create('caveopolis:depth_charm_ii').tag('c:charms').displayName('Depth Charm II')
    event.create('caveopolis:depth_charm_iii').tag('c:charms').displayName('Depth Charm III')
    event.create('caveopolis:depth_charm_iv').tag('c:charms').displayName('Depth Charm IV')
    event.create('caveopolis:depth_charm_v').tag('c:charms').displayName('Depth Charm V')
    event.create('caveopolis:depth_charm_vi').tag('c:charms').displayName('Depth Charm VI')
    event.create('caveopolis:depth_charm_vii').tag('c:charms').displayName('Depth Charm VII')
    event.create('caveopolis:depth_charm_viii').tag('c:charms').displayName('Depth Charm VIII')

    event.create('caveopolis:base_prosperity_seeds_tier_1')
    event.create('caveopolis:base_prosperity_seeds_tier_2')
    event.create('caveopolis:base_prosperity_seeds_tier_3')
    event.create('caveopolis:base_prosperity_seeds_tier_4')
    event.create('caveopolis:base_prosperity_seeds_tier_5')
    event.create('caveopolis:base_prosperity_seeds_tier_6')

    //The Ultimate Tools
    const ModifierComponent = Java.loadClass("com.benbenlaw.castingtools.item.ModifierComponent");
    const HashMap = Java.loadClass("java.util.HashMap");

    let shovelModifiers = new HashMap()
    shovelModifiers.put("castingtools:efficiency", 10)
    shovelModifiers.put("castingtools:excavation", 3)
    shovelModifiers.put("castingtools:fortune", 10)
    shovelModifiers.put("castingtools:unbreaking", 10)

    let pickaxeModifiers = new HashMap()
    pickaxeModifiers.put("castingtools:efficiency", 10)
    pickaxeModifiers.put("castingtools:excavation", 3)
    pickaxeModifiers.put("castingtools:fortune", 10)
    pickaxeModifiers.put("castingtools:unbreaking", 10)
    pickaxeModifiers.put("castingtools:torch_placer", 1)

    let axeModifiers = new HashMap()
    axeModifiers.put("castingtools:efficiency", 10)
    axeModifiers.put("castingtools:excavation", 3)
    axeModifiers.put("castingtools:fortune", 10)
    axeModifiers.put("castingtools:unbreaking", 10)

    let hoeModifiers = new HashMap()
    hoeModifiers.put("castingtools:efficiency", 10)
    hoeModifiers.put("castingtools:excavation", 3)
    hoeModifiers.put("castingtools:fortune", 10)
    hoeModifiers.put("castingtools:unbreaking", 10)

    let swordModifiers = new HashMap()
    swordModifiers.put("castingtools:looting", 10)
    swordModifiers.put("castingtools:unbreaking", 10)
    swordModifiers.put("castingtools:sharpness", 100)
    swordModifiers.put("castingtools:ignite", 8)

    event.create('caveopolis:the_ultimate_shovel', 'shovel')
        .tag(['minecraft:shovels', 'castingtools:is_enhanceable'])
        .component('castingtools:modifier_component', new ModifierComponent(shovelModifiers))
        .displayName('The Ultimate Shovel')

    event.create('caveopolis:the_ultimate_pickaxe', 'pickaxe')
        .tag(['minecraft:pickaxes', 'castingtools:is_enhanceable'])
        .component('castingtools:modifier_component', new ModifierComponent(pickaxeModifiers))
        .displayName('The Ultimate Pickaxe')

    event.create('caveopolis:the_ultimate_axe', 'axe')  
        .tag(['minecraft:axes', 'castingtools:is_enhanceable'])
        .component('castingtools:modifier_component', new ModifierComponent(axeModifiers))
        .displayName('The Ultimate Axe')

    event.create('caveopolis:the_ultimate_hoe', 'hoe')
        .tag(['minecraft:hoes', 'castingtools:is_enhanceable'])
        .component('castingtools:modifier_component', new ModifierComponent(hoeModifiers))
        .displayName('The Ultimate Hoe')

    event.create('caveopolis:the_ultimate_sword', 'sword')  
        .tag(['minecraft:swords', 'castingtools:is_enhanceable'])
        .component('castingtools:modifier_component', new ModifierComponent(swordModifiers))
        .displayName('The Ultimate Sword')


    let hammerModifiersExc = new HashMap()
    hammerModifiersExc.put("castingtools:excavation", 1)

    //Excavating Hammers
    event.create('caveopolis:excavating_stone_hammer', 'pickaxe')
        .tag(['caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.STONE))
        .modifyTier(tier => {
            tier.setRepairItemsTag('c:compressed/cobblestone')
        })
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiersExc))
        .maxDamage('655').tooltip("Mines a 3x3 area")

    event.create('caveopolis:excavating_copper_hammer', 'pickaxe')
        .tag(['caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.COPPER))
        .modifyTier(tier => {
            tier.setRepairItemsTag('c:storage_blocks/copper')
        })
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiersExc))
        .maxDamage('950').tooltip("Mines a 3x3 area")

    event.create('caveopolis:excavating_iron_hammer', 'pickaxe')
        .tag(['caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.IRON))
        .modifyTier(tier => {
            tier.setRepairItemsTag('c:storage_blocks/iron')
        })
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiersExc))
        .maxDamage('1250').tooltip("Mines a 3x3 area")
    
    event.create('caveopolis:excavating_diamond_hammer', 'pickaxe')
        .tag(['caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.DIAMOND))
        .modifyTier(tier => {
            tier.setRepairItemsTag('c:storage_blocks/diamond')
        })
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiersExc))
        .maxDamage('7805').tooltip("Mines a 3x3 area")
    
    event.create('caveopolis:excavating_netherite_hammer', 'pickaxe')
        .tag(['caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.NETHERITE))
        .modifyTier(tier => {
            tier.setRepairItemsTag('c:storage_blocks/netherite')
        })
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiersExc))
        .maxDamage('10155').tooltip("Mines a 3x3 area")

    //Pulverizing Hammers
    let hammerModifiers = new HashMap()
    hammerModifiers.put("castingtools:pulverizing", 1)

    event.create('caveopolis:stone_hammer', 'pickaxe')
        .tag(['caveopolis:pulverizing_hammers', 'caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.STONE))
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiers))
        .maxDamage('131').tooltip("Used to pulverize blocks")

    event.create('caveopolis:copper_hammer', 'pickaxe')
        .tag(['caveopolis:pulverizing_hammers', 'caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.COPPER))
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiers))
        .maxDamage('190').tooltip("Used to pulverize blocks")

    event.create('caveopolis:iron_hammer', 'pickaxe')
        .tag(['caveopolis:pulverizing_hammers', 'caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.IRON))
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiers))
        .maxDamage('250').tooltip("Used to pulverize blocks")

    event.create('caveopolis:diamond_hammer', 'pickaxe')
        .tag(['caveopolis:pulverizing_hammers', 'caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.DIAMOND))
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiers))
        .maxDamage('1561').tooltip("Used to pulverize blocks")

    event.create('caveopolis:netherite_hammer', 'pickaxe')
        .tag(['caveopolis:pulverizing_hammers', 'caveopolis:hammers', 'minecraft:pickaxes'])
        .tier(new MutableToolTier(ToolMaterial.NETHERITE))
        .component('castingtools:modifier_component', new ModifierComponent(hammerModifiers))
        .maxDamage('2031').tooltip("Used to pulverize blocks")

})