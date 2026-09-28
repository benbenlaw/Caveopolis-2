//Caveopolis

ServerEvents.recipes(event => {

    //Molten Black Iron
    event.recipes.casting.melting(['90x caveopolis:molten_black_iron'], 'caveopolis:raw_black_iron', 2000).id('caveopolis:melting/molten_black_iron_from_raw')
    event.recipes.casting.melting(['90x caveopolis:molten_black_iron'], 'extendedcrafting:black_iron_ingot', 2000).id('caveopolis:melting/molten_black_iron_from_ingot')
    event.recipes.casting.melting(['10x caveopolis:molten_black_iron'], 'extendedcrafting:black_iron_nugget', 2000).id('caveopolis:melting/molten_black_iron_from_nugget')
    event.recipes.casting.melting(['810x caveopolis:molten_black_iron'], 'extendedcrafting:black_iron_block', 2000).id('caveopolis:melting/molten_black_iron_from_block')

    colors.forEach(color => {
        event.shaped(`caveopolis:${color}_shimmer_crystal`, ['AAA', 'ABA', 'AAA'], {
            A: `colors:${color}_stone`,
            B: 'caveopolis:shimmer_crystal'
        }).id(`caveopolis:shimmer_crystal/${color}_shimmer_crystal`)
    })

    //Blaze Block
    event.shaped('caveopolis:blaze_block', ['AAA', 'AAA', 'AAA'], {
        A: 'minecraft:blaze_rod'
    }).id('caveopolis:blaze_block') 
    event.shapeless('9x minecraft:blaze_rod', ['caveopolis:blaze_block']).id('caveopolis:blaze_block_to_rods')

    //The Ultimate Tools
    event.smithing('caveopolis:the_ultimate_pickaxe', 'caveopolis:the_ultimate_template', 'mysticalagriculture:awakened_supremium_pickaxe', 'extendedcrafting:the_ultimate_ingot').id('caveopolis:smithing/the_ultimate_pickaxe')
    event.smithing('caveopolis:the_ultimate_shovel', 'caveopolis:the_ultimate_template', 'mysticalagriculture:awakened_supremium_shovel', 'extendedcrafting:the_ultimate_ingot').id('caveopolis:smithing/the_ultimate_shovel')
    event.smithing('caveopolis:the_ultimate_sword', 'caveopolis:the_ultimate_template', 'mysticalagriculture:awakened_supremium_sword', 'extendedcrafting:the_ultimate_ingot').id('caveopolis:smithing/the_ultimate_sword')
    event.smithing('caveopolis:the_ultimate_hoe', 'caveopolis:the_ultimate_template', 'mysticalagriculture:awakened_supremium_hoe', 'extendedcrafting:the_ultimate_ingot').id('caveopolis:smithing/the_ultimate_hoe')
    event.smithing('caveopolis:the_ultimate_axe', 'caveopolis:the_ultimate_template', 'mysticalagriculture:awakened_supremium_axe', 'extendedcrafting:the_ultimate_ingot').id('caveopolis:smithing/the_ultimate_axe')

    //Omnithium Mesh
    event.smithing('caveopolis:omnithium_mesh', 'castingtools:omnithium_upgrade_smithing_template', 'strainers:diamond_mesh', 'castingtools:omnithium_ingot').id('caveopolis:smithing/omnithium_mesh')

    //Improved Sonar Cannon
    event.shapeless('caveopolis:improved_sonar_cannon', ['caveopolis:sonar_cannon', '4x dimresources:dimensional_shard']).id('caveopolis:improved_sonar_cannon')

    //Sonar Cannon
    event.shapeless('caveopolis:sonar_cannon', ['caveopolis:sonic_charge', 'ae2:matter_cannon']).id('caveopolis:sonar_cannon')

    //Shimmer Crystal
    event.recipes.enderio.alloy_smelting('caveopolis:shimmer_crystal', ['16x #caveopolis:shimmer_crystal_ingredient', 'enderio:weather_crystal', '16x alltheores:platinum_ingot'], 20000, 0.0).id('caveopolis:enderio/alloy_smelting/shimmer_crystal')

    //Enhanced Crystaltine
    event.shaped('caveopolis:enhanced_crystaltine_block', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:enhanced_crystaltine_ingot'
    }).id('caveopolis:enhanced_crystaltine_block')

    event.shaped('caveopolis:enhanced_crystaltine_ingot', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:enhanced_crystaltine_nugget'
    }).id('caveopolis:enhanced_crystaltine_ingot')

    event.shapeless('9x caveopolis:enhanced_crystaltine_nugget', 'caveopolis:enhanced_crystaltine_ingot').id('caveopolis:enhanced_crystaltine_nugget_from_ingot')
    event.shapeless('9x caveopolis:enhanced_crystaltine_ingot', 'caveopolis:enhanced_crystaltine_block').id('caveopolis:enhanced_crystaltine_ingot_from_block')

    //Black Gold
    event.shaped('caveopolis:black_gold_block', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:black_gold_ingot'
    }).id('caveopolis:black_gold_block')

    event.shaped('caveopolis:black_gold_ingot', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:black_gold_nugget'
    }).id('caveopolis:black_gold_ingot')

    event.shapeless('9x caveopolis:black_gold_nugget', 'caveopolis:black_gold_ingot').id('caveopolis:black_gold_nugget_from_ingot')
    event.shapeless('9x caveopolis:black_gold_ingot', 'caveopolis:black_gold_block').id('caveopolis:black_gold_ingot_from_block')

    //Matter 
    event.shaped('caveopolis:matter_block', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:matter_ingot'
    }).id('caveopolis:matter_block_from_ingots')

    event.shaped('caveopolis:matter_ingot', ['AAA', 'AAA', 'AAA'], {
        A: 'caveopolis:matter_nugget'
    }).id('caveopolis:matter_ingot_from_nuggets')

    event.shapeless('9x caveopolis:matter_nugget', 'caveopolis:matter_ingot').id('caveopolis:matter_nugget_from_ingot')
    event.shapeless('9x caveopolis:matter_ingot', 'caveopolis:matter_block').id('caveopolis:matter_ingot_from_block')

    //Speedy Ladder
    event.shaped('caveopolis:speedy_ladder', ['A A', 'AAA', 'A A'], {
        A: 'caveopolis:suspicious_stick'
    }).id('caveopolis:speedy_ladder')
  
    //Mystic Room Certus
    event.shaped('caveopolis:mystic_room_certus', [' A ', 'ABA', ' A '], {
        A: 'colors:light_blue_stone',
        B: 'caveopolis:charged_lapis'
    }).id('caveopolis:mystic_room_certus')
  
    //Mystic Room Amethyst
    event.shaped('caveopolis:mystic_room_amethyst', [' A ', 'ABA', ' A '], {
        A: 'colors:purple_stone',
        B: 'caveopolis:charged_lapis'
    }).id('caveopolis:mystic_room_amethyst')
  
    //Moss Block
    event.shaped('minecraft:moss_block', ['AA', 'AA'], {
        A: 'caveopolis:moss_ball'
    }).id('caveopolis:moss_block')

    //Moss Ball
    event.shaped('caveopolis:moss_ball', [' A ', 'ABA', ' A '], {
        A: 'strainers:leaf_pile',
        B: 'minecraft:snowball'
    }).id('caveopolis:moss_ball')
  
    //Life Infused Moss
    event.shaped('caveopolis:life_infused_moss', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:moss_block',
        B: 'mysticalagriculture:elemental_essence',
        C: 'bhc:red_heart'
    }).id('caveopolis:life_infused_moss')

    //Stone Rod
    event.shaped('2x caveopolis:stone_rod', ['A', 'A'], {
        A: 'minecraft:cobblestone'
    }).id('caveopolis:stone_rod')

    //Rotten Dust
    event.shapeless('3x caveopolis:rotten_dust', 'caveopolis:rotten_bone').id('caveopolis:rotten_dust')

    //Stone Hammer
    event.shaped('caveopolis:stone_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:cobblestone',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:stone_hammer')

    //Copper Hammer
    event.shaped('caveopolis:copper_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:copper_ingot',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:copper_hammer')

    //Iron Hammer
    event.shaped('caveopolis:iron_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:iron_ingot',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:iron_hammer')

    //Diamond Hammer
    event.shaped('caveopolis:diamond_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:diamond',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:diamond_hammer')

    //Netherite Hammer
    event.shaped('caveopolis:netherite_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:netherite_ingot',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:netherite_hammer')

    //Excavating Stone Hammer
    event.shaped('caveopolis:excavating_stone_hammer', [' A ', ' BA', 'B  '],{
        A: 'compressium:cobblestone_1',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:excavating_stone_hammer')

    //Excavating Copper Hammer
    event.shaped('caveopolis:excavating_copper_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:copper_block',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:excavating_copper_hammer')

    //Excavating Iron Hammer
    event.shaped('caveopolis:excavating_iron_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:iron_block',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:excavating_iron_hammer')

    //Excavating Diamond Hammer
    event.shaped('caveopolis:excavating_diamond_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:diamond_block',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:excavating_diamond_hammer')

    //Excavating Netherite Hammer
    event.shaped('caveopolis:excavating_netherite_hammer', [' A ', ' BA', 'B  '],{
        A: 'minecraft:netherite_block',
        B: 'caveopolis:stone_rod',
    }).id('caveopolis:excavating_netherite_hammer')

    //Empty Heart
    event.shaped('caveopolis:empty_heart', ['AAA', 'ABA', ' A '], {
        A: 'minecraft:iron_nugget',
        B: 'mysticalagriculture:elemental_essence'
    }).id('caveopolis:empty_heart')
 
    //Warden Chamber
    event.shaped('caveopolis:warden_chamber', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:sculk',
        B: 'minecraft:echo_shard',
        C: '#caveopolis:colored_shimmer_crystals'
    }).id('caveopolis:warden_chamber')

    //Depth Charm VII
    event.shaped('caveopolis:depth_charm_vii', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:dragon_breath',
        B: 'mysticalagradditions:dragon_egg_chunk',
        C: 'caveopolis:depth_charm_vi'
    }).id('caveopolis:depth_charm_vii')

    //Depth Charm VI
    event.recipes.mysticalagriculture.awakening('caveopolis:depth_charm_vi', 'caveopolis:depth_charm_v',
        [
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust'
        ],
        [
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence',
            '40x mysticalagriculture:elemental_essence'
        ]
    ).id('caveopolis:mysticalagriculture/awakening/depth_charm_vi')

    //Depth Charm V
    event.recipes.enderio.alloy_smelting('caveopolis:depth_charm_v', 
        ['3x enderio_endergy:crystalline_alloy_ingot', 'caveopolis:depth_charm_iv', '3x powah:crystal_niotic'], 12800, 0.0).id('caveopolis:enderio/alloy_smelting/depth_charm_v')

    //Depth Charm III
    event.shaped('caveopolis:depth_charm_iii', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:quartz',
        B: 'minecraft:obsidian',
        C: 'caveopolis:depth_charm_ii'
    }).id('caveopolis:depth_charm_iii')

    //Depth Charm II
    event.shaped('caveopolis:depth_charm_ii', ['ABA', 'BCB', 'ABA'], {
        A: 'caveopolis:suspicious_flint',
        B: 'minecraft:pitcher_plant',
        C: 'caveopolis:depth_charm_i'
    }).id('caveopolis:depth_charm_ii')

    //Depth Charm IV
    event.shaped('caveopolis:depth_charm_iv', ['ABA', 'BCB', 'ABA'], {
        A: 'ae2:logic_processor',
        B: 'ae2:calculation_processor',
        C: 'caveopolis:depth_charm_iii'
    }).id('caveopolis:depth_charm_iv')

})
