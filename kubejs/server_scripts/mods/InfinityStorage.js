//Infinity Storage

ServerEvents.recipes(event => {

    //Infinity Storage Drive
    event.shaped('infinitystorage:infinity_storage_drive', ['ADA', 'BCB', 'ADA'], {
        A: '#c:ingots/osmium',
        B: 'caveopolis:matter_block',
        C: 'enderio:void_chassis',
        D: 'mysticalagradditions:nether_star_shard'
    }).id('caveopolis:infinitystorage/infinity_storage_drive')

    event.remove({id: 'infinitystorage:infinity_storage_drive'})

    //Empty Infinity Drive
    event.recipes.powah.energizing('infinitystorage:empty_infinity_drive', 1000000, 
        ['ae2:singularity', 'ae2:cell_component_256k', 'ae2:cell_component_256k', 'mysticalagriculture:cognizant_dust' ]).id('caveopolis:powah/energizing/empty_infinity_drive')

    event.remove({id: 'infinitystorage:empty_infinity_drive'})

    //Infinity Cobblestone Drive
    event.recipes.powah.energizing('infinitystorage:infinity_cobblestone_drive', 1000000, 
        ['infinitystorage:empty_infinity_drive', 'compressium:cobblestone_5', 'mysticalagriculture:cognizant_dust']).id('caveopolis:powah/energizing/infinity_cobblestone_drive')

    event.remove({id: 'infinitystorage:infinity_cobblestone_drive'})

    //Infinity Stone Drive
    event.recipes.powah.energizing('infinitystorage:infinity_stone_drive', 1000000, 
        ['infinitystorage:empty_infinity_drive', 'compressium:stone_5', 'mysticalagriculture:cognizant_dust']).id('caveopolis:powah/energizing/infinity_stone_drive')
    
    event.remove({id: 'infinitystorage:infinity_stone_drive'})

    //Infinity Dirt Drive
    event.recipes.powah.energizing('infinitystorage:infinity_dirt_drive', 1000000, 
        ['infinitystorage:empty_infinity_drive', 'compressium:dirt_5', 'mysticalagriculture:cognizant_dust']).id('caveopolis:powah/energizing/infinity_dirt_drive')

    event.remove({id: 'infinitystorage:infinity_dirt_drive'})

    //Infinity Sand Drive
    event.recipes.powah.energizing('infinitystorage:infinity_sand_drive', 1000000, 
        ['infinitystorage:empty_infinity_drive', 'compressium:sand_5', 'mysticalagriculture:cognizant_dust']).id('caveopolis:powah/energizing/infinity_sand_drive') 

    event.remove({id: 'infinitystorage:infinity_sand_drive'})

    //Infinity Gravel Drive
    event.recipes.powah.energizing('infinitystorage:infinity_gravel_drive', 1000000,
        ['infinitystorage:empty_infinity_drive', 'compressium:gravel_5', 'mysticalagriculture:cognizant_dust']).id('caveopolis:powah/energizing/infinity_gravel_drive')

    event.remove({id: 'infinitystorage:infinity_gravel_drive'})

})
