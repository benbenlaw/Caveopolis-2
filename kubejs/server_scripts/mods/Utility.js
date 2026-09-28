//BBL Utility

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'utility:summoning/sniffer'})

    //Replace Input
    event.replaceInput({id: 'utility:resource_generator'}, 'minecraft:gold_ingot', 'minecraft:obsidian')
    event.replaceInput({id: 'utility:fluid_generator'}, 'minecraft:gold_ingot', 'minecraft:obsidian')

    //Replace Dirt with Life Infused Moss
    event.forEachRecipe({ type: 'utility:summoning' }, r => {
        if (r.json.has('below_block')) {
            let belowBlock = r.json.get('below_block')

            if (belowBlock.isJsonPrimitive() && belowBlock.getAsString() === '#minecraft:dirt') {
                let waterObj = JsonUtils.of({ Name: 'caveopolis:life_infused_moss' })
                r.json.add('below_block', waterObj)
                r.save()
            }
        }
    })

    //Colored Stone Resource Generator
    colors.forEach(color => {
        event.recipes.utility.resource_generator(`
            colors:${color}_stone`, 
            `colors:${color}_stone`,
            'minecraft:water',
            'minecraft:lava',
            false, 
            false
        ).id(`caveopolis:utility/resource_generator/${color}_stone`)
    })

    //Empty Drop
    event.recipes.utility.drying_table('strainers:depleted_drop', '#caveopolis:drops').id('caveopolis:utility/drying_table/depleted_drop')

    //Block Breaker
    event.shaped('utility:block_breaker', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/zinc',
        B: '#c:ingots/bronze',
        C: '#minecraft:pickaxes'
    }).id('caveopolis:utility/block_breaker')
    event.remove({id: 'utility:block_breaker'})

    //Block Placer
    event.shaped('utility:block_placer', ['AAA', 'B B', 'AAA'], {
        A: '#c:ingots/zinc',
        B: '#c:ingots/bronze'
    }).id('caveopolis:utility/block_placer')
    event.remove({id: 'utility:block_placer'})


    //Item Collector
    event.shaped('utility:item_collector', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/nickel',
        B: '#c:ingots/iron',
        C: 'minecraft:hopper'
    }).id('caveopolis:utility/item_collector')
    event.remove({id: 'utility:item_collector'})

    //Summoning Block
    event.shaped('utility:summoning_block', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/nickel',
        B: '#c:ingots/iron',
        C: 'minecraft:hay_block'
    }).id('caveopolis:utility/summoning_block')
    event.remove({id: 'utility:summoning_block'})
    
    //Compactor Block
    event.shaped('utility:compactor', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/zinc',
        B: '#c:ingots/aluminum',
        C: '#c:player_workstations/crafting_tables'
    }).id('caveopolis:utility/compactor')
    event.remove({id: 'utility:compactor'})

    //Shops Trader
    event.recipes.utility.summoning('shops:shop_trader', 'shops:gold_coin', 'caveopolis:life_infused_moss').id('caveopolis:utility/summoning/shops_trader')

    //Warden
    event.recipes.utility.summoning('minecraft:warden', 'minecraft:sculk_shrieker', 'minecraft:reinforced_deepslate').entityData({
        Brain:{memories:{"minecraft:dig_cooldown":{value:{},ttl:1200}}}
    }).id('caveopolis:utility/summoning/warden')

    //Wither Skeleton
    event.recipes.utility.summoning('minecraft:wither_skeleton', 'bhc:wither_bone', 'caveopolis:black_gold_block').id('caveopolis:utility/summoning/wither_skeleton')

    //Piglin
    event.recipes.utility.summoning('minecraft:piglin', 'caveopolis:black_gold_ingot', 'caveopolis:black_gold_block').id('caveopolis:utility/summoning/piglin')

    //Sniffy Sniffer
    event.recipes.utility.summoning('sniffysniffers:sniffy_sniffer', 'sniffysniffers:sniffy_sniffer_egg', 'minecraft:moss_block').entityData({
        Age: -12000
    }).id('caveopolis:utility/summoning/sniffy_sniffer')
   
    //Sniffer
    event.recipes.utility.summoning('minecraft:sniffer', 'minecraft:sniffer_egg', 'minecraft:moss_block').entityData({
        Age: -12000
    }).id('caveopolis:utility/summoning/sniffer')

    //Skeleton
    event.recipes.utility.summoning('minecraft:skeleton', 'minecraft:bone_block', 'colors:orange_stone').id('caveopolis:utility/summoning/skeleton')

    //Zombie
    event.recipes.utility.summoning('minecraft:zombie', 'caveopolis:rotten_dust', 'colors:red_stone').id('caveopolis:utility/summoning/zombie')

    //Spider
    event.recipes.utility.summoning('minecraft:spider', 'caveopolis:rotten_dust', 'colors:yellow_stone').id('caveopolis:utility/summoning/spider')
    
    //Enderman
    event.recipes.utility.summoning('minecraft:enderman', 'caveopolis:rotten_dust', 'colors:purple_stone').id('caveopolis:utility/summoning/enderman')

    //Creeper
    event.recipes.utility.summoning('minecraft:creeper', 'caveopolis:rotten_dust', 'colors:lime_stone').id('caveopolis:utility/summoning/creeper')

    //Pigs
    event.recipes.utility.summoning('minecraft:pig', 'minecraft:potato', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:warm"
        })
    .temperatureVariant("warm")
    .id('caveopolis:utility/summoning/pig/warm')

    event.remove({id: 'utility:summoning/pig/warm'})

    event.recipes.utility.summoning('minecraft:pig', 'minecraft:potato', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:cold"
        })
    .temperatureVariant("cold")
    .id('caveopolis:utility/summoning/pig/cold')

    event.remove({id: 'utility:summoning/pig/cold'})

    event.recipes.utility.summoning('minecraft:pig', 'minecraft:potato', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:temperate"
        })
    .temperatureVariant("temperate")
    .id('caveopolis:utility/summoning/pig/temperate')

    event.remove({id: 'utility:summoning/pig/temperate'})

    //Chickens
    event.recipes.utility.summoning('minecraft:chicken', 'minecraft:wheat_seeds', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:warm"
        })
    .temperatureVariant("warm")
    .id('caveopolis:utility/summoning/chicken/warm')

    event.remove({id: 'utility:summoning/chicken/warm'})

    event.recipes.utility.summoning('minecraft:chicken', 'minecraft:wheat_seeds', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:cold"
        })
    .temperatureVariant("cold")
    .id('caveopolis:utility/summoning/chicken/cold')

    event.remove({id: 'utility:summoning/chicken/cold'})

    event.recipes.utility.summoning('minecraft:chicken', 'minecraft:wheat_seeds', 'caveopolis:life_infused_moss').entityData({
            variant: "minecraft:temperate"
        })
    .temperatureVariant("temperate")
    .id('caveopolis:utility/summoning/chicken/temperate')


})
