//Mystical Agriculture

ServerEvents.recipes(event => {

    //Removed
    event.remove({id: 'mysticalagriculture:essence/minecraft/lava_bucket'})
    event.remove({id: 'mysticalagriculture:essence/minecraft/water_bucket'})
    event.remove({id: 'mysticalagriculture:diamond_seeds_infusion'})
    event.remove({id: 'mysticalagriculture:mystical_fertilizer_better'})
    event.remove({id: 'mysticalagriculture:mystical_fertilizer'})
    event.remove({id: 'mysticalagriculture:prudentium_block_combine'})
    event.remove({id: 'mysticalagriculture:tertium_essence'})
    event.remove({id: 'mysticalagriculture:tertium_block_combine'})
    event.remove({id: 'mysticalagriculture:imperium_essence'})
    event.remove({id: 'mysticalagriculture:imperium_block_combine'})
    event.remove({id: 'mysticalagriculture:supremium_essence'})
    event.remove({id: 'mysticalagriculture:supremium_block_combine'})
    event.remove({id: 'mysticalagradditions:insanium_essence'})
    event.remove({id: 'mysticalagradditions:insanium_block_combine'})

    event.remove({id: 'mysticalagriculture:quartz_enriched_iron_seeds_infusion'})

    event.remove({type: 'minecraft:crafting_shaped', output: '#c:ingots', input: '#caveopolis:removed_mystical_essence_crafts'})
    event.remove({type: 'minecraft:crafting_shaped', output: '#c:gems', input: '#caveopolis:removed_mystical_essence_crafts'})
    event.remove({type: 'minecraft:crafting_shaped', output: '#c:dusts', input: '#caveopolis:removed_mystical_essence_crafts'})
    
    //Replace Input
    event.replaceInput({id: 'mysticalagriculture:awakening_altar'}, 'minecraft:orange_wool', 'colors:orange_stone')
    event.replaceInput({id: 'mysticalagriculture:awakening_pedestal'}, 'minecraft:orange_wool', 'colors:orange_stone')
    event.replaceInput({id: 'mysticalagriculture:infusion_altar'}, 'minecraft:red_wool', 'colors:red_stone')
    event.replaceInput({id: 'mysticalagriculture:infusion_pedestal'}, 'minecraft:red_wool', 'colors:red_stone')
    event.replaceInput({id: 'mysticalagriculture:infusion_crystal'}, 'minecraft:diamond', 'caveopolis:charged_lapis')
    event.replaceInput({id: 'mysticalagriculture:enchanter'}, 'mysticalagriculture:soulium_ingot', 'mysticalagradditions:nether_star_shard')

    //Missing Ores
    event.recipes.mysticalagriculture.ore_infusion('#c:ores/soulium', ['mysticalagriculture:soulstone', '8x mysticalagriculture:soulium_essence']).id('caveopolis:soulium_ore')
    event.recipes.mysticalagriculture.ore_infusion('#c:ores/silver', ['minecraft:stone', '8x mysticalagriculture:silver_essence']).id('caveopolis:silver_ore')

    //Creative Essence
    event.recipes.extendedcrafting.compressor('mysticalagradditions:creative_essence', '64x mysticalagradditions:insanium_essence', 
        'extendedcrafting:the_ultimate_catalyst', 10000000).id('caveopolis:compressor/creative_essence');

    //Nether Star Shard
    event.shapeless('3x mysticalagradditions:nether_star_shard', ['minecraft:nether_star']).id('caveopolis:mysticalagriculture/nether_star_shard')

    //Dragon Shard
    event.recipes.enderio.sag_milling([['mysticalagradditions:dragon_scale'], ['mysticalagradditions:dragon_egg_chunk'], ['mysticalagradditions:dragon_egg_chunk', 0.5]], 'minecraft:dragon_egg', 10000).id('caveopolis:mysticalagriculture/dragon_egg_chunk')

    //Ore Infuser
    event.shaped('mysticalagriculture:ore_infuser', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:emerald',
        C: '#c:ores',
        D: 'mysticalagriculture:infusion_crystal'
    }).id('caveopolis:mysticalagriculture/ore_infuser')

    event.remove({id: 'mysticalagriculture:ore_infuser'})

    //Soul Extractor
    event.shaped('mysticalagriculture:soul_extractor', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'mysticalagriculture:soulium_ingot',
        C: 'mysticalagriculture:tertium_essence',
        D: 'easy_piglins:piglin'
    }).id('caveopolis:mysticalagriculture/soul_extractor')

    event.remove({id: 'mysticalagriculture:soul_extractor'})

    //Harvester
    event.shaped('mysticalagriculture:harvester', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:moss_block',
        C: 'mysticalagriculture:golden_scythe',
        D: 'cloche:cloche'
    }).id('caveopolis:mysticalagriculture/harvester')

    event.remove({id: 'mysticalagriculture:harvester'})

    //Fertilizer
    event.shaped('mysticalautomation:fertilizer', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'mysticalagriculture:mystical_fertilizer',
        C: 'minecraft:golden_hoe',
        D: 'minecraft:bone_block'
    }).id('caveopolis:mysticalagriculture/fertilizer')

    event.remove({id: 'mysticalautomation:fertilizer'})

    //Infuser
    event.shaped('mysticalautomation:infuser', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'mysticalagriculture:prudentium_essence',
        C: 'alltheores:osmium_ingot',
        D: 'mysticalagriculture:inferium_block'
    }).id('caveopolis:mysticalautomation/infuser')

    event.remove({id: 'mysticalautomation:infuser'})

    //Ender Dragon Head
    event.recipes.mysticalagriculture.awakening('minecraft:dragon_head', '#minecraft:skulls',
        [
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
        ],
        [
            '40x mysticalagriculture:enderman_essence',
            '40x mysticalagriculture:end_essence',
            '40x mysticalagriculture:chicken_essence',
            '40x mysticalagriculture:end_essence',
        ]
    ).id('caveopolis:mysticalagriculture/awakening/dragon_head')

    //Ender Dragon Egg
    event.recipes.mysticalagriculture.awakening('minecraft:dragon_egg', '#c:eggs',
        [
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:elemental_essence',
        ],
        [
            '40x mysticalagriculture:enderman_essence',
            '40x mysticalagriculture:end_essence',
            '40x mysticalagriculture:chicken_essence',
            '40x mysticalagriculture:end_essence',
        ]
    ).id('caveopolis:mysticalagriculture/awakening/dragon_egg')

    //Awakened Netherite Ingot
    event.recipes.mysticalagriculture.awakening('caveopolis:awakened_netherite_ingot', 'minecraft:netherite_ingot',
        [
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
            'mysticalagriculture:awakened_supremium_essence',
        ],
        [
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence'
        ]
    ).transferComponents(true).id('caveopolis:mysticalagriculture/awakening/awakened_netherite_ingot')

    //Machine Upgrade
    event.recipes.mysticalagriculture.awakening('mysticalagriculture:upgrade_base', 'mysticalagriculture:prosperity_shard',
        [
            'mysticalagriculture:prosperity_ingot',
            'mysticalagriculture:prosperity_ingot',
            'mysticalagriculture:prosperity_ingot',
            'mysticalagriculture:prosperity_ingot',
        ],
        [
            '20x mysticalagriculture:elemental_essence',
            '20x mysticalagriculture:elemental_essence',
            '20x mysticalagriculture:elemental_essence',
            '20x mysticalagriculture:elemental_essence'
        ]
    ).transferComponents(true).id('caveopolis:mysticalagriculture/awakening/upgrade_base')

    event.remove({id: 'mysticalagriculture:upgrade_base'})

    //Inferium Seeds
    event.shaped('mysticalagriculture:inferium_seeds', ['AAA', 'ABA', 'AAA'], {
        A: 'mysticalagriculture:inferium_essence',
        B: 'minecraft:torchflower_seeds'
    }).id('caveopolis:mysticalagriculture/inferium_seeds')

    event.remove({id: 'mysticalagriculture:inferium_seeds'})

    //Base Prosperity Seeds
    event.replaceInput({id: 'mysticalagriculture:prosperity_seed_base'}, 'minecraft:wheat_seeds', 'minecraft:torchflower_seeds')

    //Stone Seed Replacement
    event.replaceInput({id: 'mysticalagriculture:stone_seeds_infusion'}, 'mysticalagriculture:prosperity_seed_base', 'mysticalagriculture:earth_seeds')

    //Gold Mesh
    event.recipes.mysticalagriculture.awakening('strainers:gold_mesh', 'strainers:iron_mesh', //input
        [
            'minecraft:gold_ingot',
            'mysticalagriculture:elemental_essence',
            'minecraft:gold_ingot',
            'mysticalagriculture:elemental_essence'
        ],
        [
            '5x mysticalagriculture:air_essence',
            '5x mysticalagriculture:earth_essence',
            '5x mysticalagriculture:water_essence',
            '5x mysticalagriculture:fire_essence'
        ]
    ).transferComponents(true).id('caveopolis:mysticalagriculture/awakening/gold_mesh')

    //Red Heart
    event.recipes.mysticalagriculture.infusion('bhc:red_heart', 'caveopolis:empty_heart',
        [
            'mysticalagriculture:inferium_block',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_block',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_block',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_block',
            'mysticalagriculture:elemental_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/red_heart')

    //Base Prosperity Seeds Tier 1
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_1', 'mysticalagriculture:prosperity_seed_base',
        [
            'mysticalagriculture:inferium_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_essence',
            'mysticalagriculture:elemental_essence',
            'mysticalagriculture:inferium_essence',
            'mysticalagriculture:elemental_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_1')

    //Base Prosperity Seeds Tier 2
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_2', 'caveopolis:base_prosperity_seeds_tier_1',
        [
            'mysticalagriculture:prudentium_essence',
            'minecraft:prismarine_crystals',
            'mysticalagriculture:prudentium_essence',
            'minecraft:prismarine_crystals',
            'mysticalagriculture:prudentium_essence',
            'minecraft:prismarine_crystals',
            'mysticalagriculture:prudentium_essence',
            'minecraft:prismarine_crystals'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_2')

    //Base Prosperity Seeds Tier 3
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_3', 'caveopolis:base_prosperity_seeds_tier_2',
        [
            'mysticalagriculture:tertium_essence',
            'powah:crystal_blazing',
            'mysticalagriculture:tertium_essence',
            'powah:crystal_blazing',
            'mysticalagriculture:tertium_essence',
            'powah:crystal_blazing',
            'mysticalagriculture:tertium_essence',
            'powah:crystal_blazing'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_3')

    //Base Prosperity Seeds Tier 4
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_4', 'caveopolis:base_prosperity_seeds_tier_3',
        [
            'mysticalagriculture:imperium_essence',
            'mysticalagradditions:nether_star_shard',
            'mysticalagriculture:imperium_essence',
            'mysticalagradditions:nether_star_shard',
            'mysticalagriculture:imperium_essence',
            'mysticalagradditions:nether_star_shard',
            'mysticalagriculture:imperium_essence',
            'mysticalagradditions:nether_star_shard'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_4')

    //Base Prosperity Seeds Tier 5
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_5', 'caveopolis:base_prosperity_seeds_tier_4',
        [
            'mysticalagriculture:supremium_essence',
            'minecraft:echo_shard',
            'mysticalagriculture:supremium_essence',
            'minecraft:echo_shard',
            'mysticalagriculture:supremium_essence',
            'minecraft:echo_shard',
            'mysticalagriculture:supremium_essence',
            'minecraft:echo_shard'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_5')

    //Base Prosperity Seeds Tier 6
    event.recipes.mysticalagriculture.infusion('caveopolis:base_prosperity_seeds_tier_6', 'caveopolis:base_prosperity_seeds_tier_5',
        [
            'mysticalagradditions:insanium_essence',
            'extendedcrafting:luminessence',
            'mysticalagradditions:insanium_essence',
            'extendedcrafting:luminessence',
            'mysticalagradditions:insanium_essence',
            'extendedcrafting:luminessence',
            'mysticalagradditions:insanium_essence',
            'extendedcrafting:luminessence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_prosperity_seeds_tier_6')

    //Elemental Crux Seeds
    event.recipes.mysticalagriculture.infusion('caveopolis:elemental_crux', 'caveopolis:base_crux',
        [
            'mysticalagriculture:earth_seeds',
            'mysticalagriculture:earth_essence',
            'mysticalagriculture:air_seeds',
            'mysticalagriculture:air_essence',
            'mysticalagriculture:water_seeds',
            'mysticalagriculture:water_essence',
            'mysticalagriculture:fire_seeds',
            'mysticalagriculture:fire_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/elemental_crux')

    //Base Crux Seeds
    event.recipes.mysticalagriculture.infusion('caveopolis:base_crux', 'minecraft:stone',
        [
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard',
            'mysticalagriculture:prosperity_shard'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/base_crux')

    //Elemental Seeds
    event.recipes.mysticalagriculture.infusion('mysticalagriculture:elemental_seeds', 'mysticalagriculture:prosperity_seed_base',
        [
            'mysticalagriculture:earth_seeds',
            'mysticalagriculture:earth_essence',
            'mysticalagriculture:air_seeds',
            'mysticalagriculture:air_essence',
            'mysticalagriculture:water_seeds',
            'mysticalagriculture:water_essence',
            'mysticalagriculture:fire_seeds',
            'mysticalagriculture:fire_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/elemental_seeds')

    //Fire Agglomeratio
    event.recipes.mysticalagriculture.infusion('mysticalagriculture:fire_agglomeratio', 'mysticalagriculture:inferium_essence',
        [
            'minecraft:flint_and_steel',
            'mysticalagriculture:fire_essence',
            'minecraft:flint_and_steel',
            'mysticalagriculture:fire_essence',
            'minecraft:flint_and_steel',
            'mysticalagriculture:fire_essence',
            'minecraft:flint_and_steel',
            'mysticalagriculture:fire_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/fire_agglomeratio')

    event.remove({id: 'mysticalagriculture:fire_agglomeratio'})

    //Air Agglomeratio
    event.recipes.mysticalagriculture.infusion('mysticalagriculture:air_agglomeratio', 'mysticalagriculture:inferium_essence',
        [    
            'minecraft:glass_bottle',
            'mysticalagriculture:air_essence',
            'minecraft:glass_bottle',
            'mysticalagriculture:air_essence',
            'minecraft:glass_bottle',
            'mysticalagriculture:air_essence',
            'minecraft:glass_bottle',
            'mysticalagriculture:air_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/air_agglomeratio')

    event.remove({id: 'mysticalagriculture:air_agglomeratio'})

    //Earth Agglomeratio
    event.recipes.mysticalagriculture.infusion('mysticalagriculture:earth_agglomeratio', 'mysticalagriculture:inferium_essence',
        [
            'minecraft:dirt',
            'mysticalagriculture:earth_essence',
            'minecraft:dirt',
            'mysticalagriculture:earth_essence',
            'minecraft:dirt',
            'mysticalagriculture:earth_essence',
            'minecraft:dirt',
            'mysticalagriculture:earth_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/earth_agglomeratio')

    event.remove({id: 'mysticalagriculture:earth_agglomeratio'})


    //Water Agglomeratio
    event.recipes.mysticalagriculture.infusion('mysticalagriculture:water_agglomeratio', 'mysticalagriculture:inferium_essence',
        [
            'strainers:water_drop',
            'mysticalagriculture:water_essence',
            'strainers:water_drop',
            'mysticalagriculture:water_essence',
            'strainers:water_drop',
            'mysticalagriculture:water_essence',
            'strainers:water_drop',
            'mysticalagriculture:water_essence'
        ]
    ).id('caveopolis:mysticalagriculture/infusion/water_agglomeratio')

    event.remove({id: 'mysticalagriculture:water_agglomeratio'})

})

SchemaJSCompatEvents.mysticalAgricultureSeeds(event => {
    tier1Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_1')
    })
    tier2Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_2')
    })
    tier3Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_3')
    })
    tier4Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_4')
    })
    tier5Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_5')
    })
    tier6Seeds.forEach(seedItem => {
        event.seedCrafting(seedItem)
            .seed('caveopolis:base_prosperity_seeds_tier_6')
    })

})