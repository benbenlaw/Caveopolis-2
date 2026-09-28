//Banned

ServerEvents.tags('item', event => {

    //Banned Items
    event.get('caveopolis:banned_items').add([
        'easy_villagers:farmer', 
        'easy_villagers:converter', 
        'easy_villagers:iron_farm',
        'easy_villagers:inventory_viewer',
        
        'alltheores:copper_ore_hammer', 
        'alltheores:iron_ore_hammer', 
        'alltheores:bronze_ore_hammer', 
        'alltheores:invar_ore_hammer', 
        'alltheores:platinum_ore_hammer',

        'extendedae:infinity_water_cell',
        'extendedae:infinity_cobblestone_cell',

        'extendedcrafting:handheld_table',

        'mysticalagriculture:conductive_alloy_seeds', 
        'mysticalagriculture:redstone_alloy_seeds', 
        'mysticalagriculture:copper_alloy_seeds', 
        'mysticalagriculture:bronze_seeds', 
        'mysticalagriculture:brass_seeds',
        'mysticalagriculture:quartz_enriched_iron_seeds',
        'mysticalagriculture:certus_quartz_seeds',
        'mysticalagriculture:steel_seeds',
        'mysticalagriculture:fluix_seeds',
        'mysticalagriculture:energetic_alloy_seeds',
        'mysticalagriculture:pulsating_alloy_seeds',
        'mysticalagriculture:dark_steel_seeds',
        'mysticalagriculture:soularium_seeds',
        'mysticalagriculture:invar_seeds',
        'mysticalagriculture:electrum_seeds',
        'mysticalagriculture:constantan_seeds',
        'mysticalagriculture:energized_steel_seeds',
        'mysticalagriculture:blazing_crystal_seeds',
        'mysticalagriculture:uraninite_seeds', 
        'mysticalagriculture:spirited_crystal_seeds', 
        'mysticalagriculture:niotic_crystal_seeds', 
        'mysticalagriculture:nitro_crystal_seeds',
        'mysticalagradditions:nitro_crystal_crux',
        'mysticalagriculture:end_steel_seeds', 
        'mysticalagriculture:vibrant_alloy_seeds', 
        'mysticalagriculture:netherite_seeds',
        'mysticalagriculture:saltpeter_seeds',
        'mysticalagriculture:apatite_seeds',
        'mysticalagriculture:platinum_seeds',
        'mysticalagriculture:coral_seeds',

        'mysticalagriculture:conductive_alloy_essence', 
        'mysticalagriculture:redstone_alloy_essence', 
        'mysticalagriculture:copper_alloy_essence', 
        'mysticalagriculture:bronze_essence', 
        'mysticalagriculture:brass_essence',
        'mysticalagriculture:quartz_enriched_iron_essence',
        'mysticalagriculture:certus_quartz_essence', 
        'mysticalagriculture:steel_essence',
        'mysticalagriculture:fluix_essence',
        'mysticalagriculture:energetic_alloy_essence',
        'mysticalagriculture:pulsating_alloy_essence',
        'mysticalagriculture:dark_steel_essence',
        'mysticalagriculture:soularium_essence',
        'mysticalagriculture:invar_essence',
        'mysticalagriculture:electrum_essence',
        'mysticalagriculture:constantan_essence',
        'mysticalagriculture:energized_steel_essence',
        'mysticalagriculture:blazing_crystal_essence',
        'mysticalagriculture:uraninite_essence',
        'mysticalagriculture:spirited_crystal_essence',
        'mysticalagriculture:niotic_crystal_essence',
        'mysticalagriculture:nitro_crystal_essence',
        'mysticalagriculture:end_steel_essence',
        'mysticalagriculture:vibrant_alloy_essence',
        'mysticalagriculture:netherite_essence',
        'mysticalagriculture:saltpeter_essence',
        'mysticalagriculture:apatite_essence',
        'mysticalagriculture:platinum_essence',
        'mysticalagriculture:coral_essense',
        'mysticalagriculture:coral_agglomeratio',

        'functionalstorage:dripping_upgrade',
        'functionalstorage:water_generator_upgrade',
        'functionalstorage:obsidian_upgrade',

        'refinedstorage:silicon',
        'enderio:silicon'


    ])

    notNeededGeOres('topaz')
    notNeededGeOres('black_quartz')
    notNeededGeOres('monazite')
    notNeededGeOres('tungsten')
    notNeededGeOres('allthemodium')
    notNeededGeOres('vibranium')
    notNeededGeOres('unobtainium')


    function notNeededGeOres(ore) {
        event.get('caveopolis:banned_items').add([
            `geore:${ore}_block`, 
            `geore:large_${ore}_bud`, 
            `geore:medium_${ore}_bud`, 
            `geore:small_${ore}_bud`, 
            `geore:${ore}_cluster`, 
            `geore:${ore}_shard`, 
            `geore:budding_${ore}`,
            `geore:${ore}_spyglass`
        ])
    }

})

ServerEvents.recipes(event => {

    //Removed Banned Items
    event.remove({output: '#caveopolis:banned_items'})
    event.remove({input: '#caveopolis:banned_items'})

})

