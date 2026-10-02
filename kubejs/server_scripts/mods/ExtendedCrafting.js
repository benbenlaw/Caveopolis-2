//Extended Crafting

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'extendedcrafting:black_iron_ingot'})
    event.remove({id: 'extendedcrafting:black_iron_slate'})

    //Replace Input
    event.replaceInput({id: 'extendedcrafting:basic_table'}, 'minecraft:iron_block', 'extendedcrafting:frame')
    event.replaceInput({id: 'extendedcrafting:the_ultimate_catalyst'}, 'extendedcrafting:black_iron_ingot', 'extendedcrafting:the_ultimate_ingot')

    //Singularities
    event.recipes.casting.solidifier('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:scorchium"]', 'extendedcrafting:the_ultimate_catalyst', '500000x casting:scorchium', 2000).durationModifier(5.0).id('caveopolis:extendedcrafting/scorchium_singularity')
    event.recipes.casting.solidifier('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:glacium"]', 'extendedcrafting:the_ultimate_catalyst', '500000x casting:glacium', 2000).durationModifier(5.0).id('caveopolis:extendedcrafting/glacium_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:cobblestone"]', '64x compressium:cobblestone_9', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/cobblestone_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:stone"]', '64x compressium:stone_9', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/stone_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:b_buck"]', '4096x shops:gold_coin', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/b_buck_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:experience"]', '1024x casting:experience_ball', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/experience_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:energy"]', '512x powah:charged_snowball', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/energy_singularity')

    event.recipes.extendedcrafting.compressor('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:amethyst"]', '8192x minecraft:amethyst_shard', 
        'extendedcrafting:the_ultimate_catalyst', 32000 * 100).powerRate(32000).id('caveopolis:extendedcrafting/amethyst_singularity')

    //Rainbow Singularity
    event.recipes.extendedcrafting.combination('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:rainbow"]', 'extendedcrafting:the_ultimate_catalyst', [
            'colors:blue_stone',
            'colors:green_stone',
            'colors:red_stone',
            'colors:yellow_stone',
            'colors:orange_stone',
            'colors:purple_stone',
            'colors:white_stone',
            'colors:black_stone',
            'colors:brown_stone',
            'colors:pink_stone',
            'colors:cyan_stone',
            'colors:magenta_stone',
            'colors:lime_stone',
            'colors:light_blue_stone',
            'colors:gray_stone',
            'colors:light_gray_stone'
        ],
        1000000
    ).powerRate(50000).id('caveopolis:extendedcrafting/rainbow_singularity')

    //Ender Ingot
    event.recipes.enderio.alloy_smelting('2x extendedcrafting:ender_ingot', ['extendedcrafting:black_iron_ingot', 'alltheores:enderium_ingot'], 12000, 0.0).id('caveopolis:enderio/alloy_smelting/ender_ingot')
    event.remove({id: 'extendedcrafting:ender_ingot'})

    //Redstone Ingot
    event.recipes.enderio.alloy_smelting('2x extendedcrafting:redstone_ingot', ['alltheores:osmium_ingot', '3x minecraft:redstone'], 12000, 0.0).id('caveopolis:enderio/alloy_smelting/redstone_ingot')
    event.remove({id: 'extendedcrafting:redstone_ingot'})

    //Crystaltine Ingot
    event.recipes.enderio.alloy_smelting('4x extendedcrafting:crystaltine_ingot', ['alltheores:platinum_ingot', 'castingtools:omnithium_ingot', 'enderio_endergy:crystalline_alloy_ingot'], 12000, 0.0).id('caveopolis:enderio/alloy_smelting/crystaltine_ingot')
    event.remove({id: 'extendedcrafting:crystaltine_ingot'})

    //Quantum Compressor
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:compressor', ['AAAAAAAAA', 'ABBBBBBBA', 'ACCCCCCCA', 'ABBBBBBBA', 'ACCCCCCCA', 'ACDCBCDCA', 'ACDCBCDCA', 'ACCCBCCCA', 'AAAAAAAAA'], {
        A: 'extendedcrafting:black_iron_ingot',
        B: 'extendedcrafting:black_iron_slate',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'extendedcrafting:the_ultimate_ingot'
    }).id('caveopolis:extendedcrafting/compressor')

    event.remove({id: 'extendedcrafting:compressor'})

    //The Ultimate Component
    event.recipes.extendedcrafting.compressor('extendedcrafting:the_ultimate_component', '32x extendedcrafting:ultimate_component', 
        'extendedcrafting:black_iron_slate', 1000000).id('caveopolis:compressor/the_ultimate_component');

    event.remove({id: 'extendedcrafting:the_ultimate_component'})

    //Enhanced Crystaltine
    event.recipes.extendedcrafting.combination('4x caveopolis:enhanced_crystaltine_ingot', 'caveopolis:assembled_star', [
            'extendedcrafting:crystaltine_ingot',
            'extendedcrafting:crystaltine_ingot',
            'extendedcrafting:crystaltine_ingot',
            'extendedcrafting:crystaltine_ingot',
        ],
        400000
    ).powerRate(10000).id('caveopolis:extendedcrafting/enhanced_crystaltine')

    //Assembled Star
    event.recipes.extendedcrafting.combination('caveopolis:assembled_star', 'minecraft:nether_star', [
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard', 
            'mysticalagradditions:nether_star_shard'
        ],
        400000
    ).powerRate(10000).id('caveopolis:extendedcrafting/assembled_star')

    //Crafting Core
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:crafting_core', ['AAAAAAA', 'ABBBBBA', 'ADDDDDA', 'ADDCDDA', 'ADDDDDA', 'ABBBBBA', 'AAAAAAA'], {
        A: 'extendedcrafting:black_iron_ingot',
        B: 'extendedcrafting:crystaltine_ingot',
        C: 'extendedcrafting:frame',
        D: 'extendedcrafting:black_iron_slate'
    }).id('caveopolis:extendedcrafting/crafting_core')

    event.remove({id: 'extendedcrafting:crafting_core'})

    //Flux Star
    event.recipes.extendedcrafting.shaped_flux_crafter('extendedcrafting:flux_star', [' A ', 'ABA', ' A '], {
        A: 'caveopolis:black_gold_ingot',
        B: 'minecraft:nether_star'
    }, 400000
    ).id('caveopolis:extendedcrafting/flux_star')

    event.remove({id: 'extendedcrafting:flux_star'})

    //Flux Crafter
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:flux_crafter', ['AAAAA', 'AABAA', 'CBBBC', 'CCBCC', 'CCCCC'], {
        A: 'caveopolis:black_gold_ingot',
        B: '#c:player_workstations/crafting_tables',
        C: 'extendedcrafting:redstone_ingot'
    }).id('caveopolis:extendedcrafting/flux_crafter')

    event.remove({id: 'extendedcrafting:flux_crafter'})

    //Flux Alternator
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:flux_alternator', [' A ', ' B ', 'BBB'], {
        A: 'caveopolis:black_gold_ingot',
        B: 'extendedcrafting:redstone_ingot',
    }).id('caveopolis:extendedcrafting/flux_alternator')

    event.remove({id: 'extendedcrafting:flux_alternator'})

    //Ender Crafter
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:ender_crafter', ['AAA', 'CBC', 'CCC'], {
        A: 'minecraft:ender_eye',
        B: '#c:player_workstations/crafting_tables',
        C: 'extendedcrafting:ender_ingot'
    }).id('caveopolis:extendedcrafting/ender_crafter')

    event.remove({id: 'extendedcrafting:ender_crafter'})

    //Ender Alternator
    event.recipes.extendedcrafting.shaped_table('extendedcrafting:ender_alternator', [' A ', ' B ', 'BBB'], {
        A: 'minecraft:ender_eye',
        B: 'extendedcrafting:ender_ingot'
    }).id('caveopolis:extendedcrafting/ender_alternator')

    event.remove({id: 'extendedcrafting:ender_alternator'})

    //Luminessence Dust
    event.recipes.enderio.sag_milling(['extendedcrafting:luminessence'], ['caveopolis:luminessence_shard'], 6000).id('caveopolis:enderio/sag_milling/luminessence')
    
    event.remove({id: 'extendedcrafting:luminessence'})

    //Black Iron Slate
    event.recipes.casting.solidifier('extendedcrafting:black_iron_slate', '#c:molds/plate', '90x caveopolis:molten_black_iron', 1000).durationModifier(2.0).id('caveopolis:solidifier/black_iron_slate')
    event.recipes.casting.solidifier('extendedcrafting:black_iron_ingot', '#c:molds/ingot', '90x caveopolis:molten_black_iron', 1000).durationModifier(2.0).id('caveopolis:solidifier/black_iron_ingot')
    event.recipes.casting.solidifier('extendedcrafting:black_iron_nugget', '#c:molds/nugget', '10x caveopolis:molten_black_iron', 1000).durationModifier(2.0).id('caveopolis:solidifier/black_iron_nugget')
    event.recipes.casting.solidifier('extendedcrafting:black_iron_block', '#c:molds/block', '810x caveopolis:molten_black_iron', 1000).durationModifier(2.0).id('caveopolis:solidifier/black_iron_block')

    //Frame
    event.shaped('extendedcrafting:frame', ['ABA', 'BCB', 'ABA'], {
        A: 'extendedcrafting:black_iron_slate',
        B: '#c:glass_blocks',
        C: 'enderio:ensouled_chassis'
    }).id('caveopolis:frame')

    event.remove({id: 'extendedcrafting:frame'})

    //Basic Component
    event.recipes.ae2.inscriber('extendedcrafting:basic_component', ['extendedcrafting:luminessence', 'extendedcrafting:black_iron_slate', 'minecraft:iron_ingot'], "press" ).id('caveopolis:ae2/inscriber/basic_component')
    event.remove({id: 'extendedcrafting:basic_component'})

    //Advanced Component
    event.recipes.ae2.inscriber('extendedcrafting:advanced_component', ['extendedcrafting:enhanced_ender_nugget', 'extendedcrafting:basic_component', 'caveopolis:black_gold_ingot'], "press" ).id('caveopolis:ae2/inscriber/advanced_component')
    event.remove({id: 'extendedcrafting:advanced_component'})

    //Elite Component
    event.recipes.ae2.inscriber('extendedcrafting:elite_component', ['extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:advanced_component', 'alltheores:platinum_ingot'], "press" ).id('caveopolis:ae2/inscriber/elite_component')
    event.remove({id: 'extendedcrafting:elite_component'})

    //Ultimate Component
    event.recipes.ae2.inscriber('extendedcrafting:ultimate_component', ['caveopolis:enhanced_crystaltine_nugget', 'extendedcrafting:elite_component', 'alltheores:iridium_ingot'], "press" ).id('caveopolis:ae2/inscriber/ultimate_component')
    event.remove({id: 'extendedcrafting:ultimate_component'})

    //The Ultimate Ingot
    event.recipes.extendedcrafting.shapeless_table(
        "extendedcrafting:the_ultimate_ingot",
        Ingredient.of('#c:ingots').itemIds.filter(id => id.toString() !== 'extendedcrafting:the_ultimate_ingot')
    ).id('caveopolis:extendedcrafting/the_ultimate_ingot')

    //The Ultimate Template
    event.recipes.extendedcrafting.shapeless_table("caveopolis:the_ultimate_template", Ingredient.of('#caveopolis:templates').itemIds).id('caveopolis:extendedcrafting/the_ultimate_template')

    //Ultimate Singularity
    event.recipes.extendedcrafting.shapeless_table("extendedcrafting:ultimate_singularity",
        [
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:scorchium"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:glacium"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:cobblestone"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:stone"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:b_buck"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:experience"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:energy"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:amethyst"]',
            'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:rainbow"]'
        ]
    ).id('caveopolis:extendedcrafting/ultimate_singularity')

    //The Creative Ingot
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABBBBBAA",
            "ABCCDCCBA",
            "BCEFDFGCB",
            "BCFHAIFCB",
            "BDDADADDB",
            "BCFJAKFCB",
            "BCLFDFMCB",
            "ABCCDCCBA",
            "AABBBBBAA"
        ],
        "key": {
            "A": "extendedcrafting:ultimate_singularity",
            "B": "mysticalagradditions:creative_essence",
            "C": "caveopolis:creative_ingot",
            "D": "extendedcrafting:the_ultimate_ingot",
            "E": "reliquary:hero_medallion",
            "F": "caveopolis:creative_shard",
            "G": "reliquary:mercy_cross",
            "H": "reliquary:emperor_chalice",
            "I": "reliquary:infernal_chalice",
            "J": "reliquary:ender_staff",
            "K": "reliquary:glacial_staff",
            "L": "reliquary:phoenix_down",
            "M": "reliquary:witherless_rose"
        },
        "result": {
            "id": "caveopolis:the_creative_ingot"
        }
    }).id('caveopolis:extendedcrafting/the_creative_ingot')

})
