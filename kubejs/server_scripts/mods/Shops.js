//Shops

ServerEvents.recipes(event => {

    //No Tier 
    event.recipes.shops.shop('shops:copper_coin', 1, 0).order(1).id('caveopolis:shops/copper_coin')
    //event.recipes.shops.shop('caveopolis:bronze_coin', 3, 0).order(2).id('caveopolis:shops/bronze_coin')
    event.recipes.shops.shop('shops:iron_coin', 5, 0).order(3).id('caveopolis:shops/iron_coin')
    event.recipes.shops.shop('shops:gold_coin', 10, 0).order(4).id('caveopolis:shops/gold_coin')
    event.recipes.shops.shop('4x minecraft:apple', 2, 1).order(5).id('caveopolis:shops/apple')
    event.recipes.shops.shop('16x strainers:stone_pebble', 2, 1).order(6).id('caveopolis:shops/stone_pebble')

    //Tier 1
    event.recipes.shops.shop('minecraft:bone_block', 6, 1).tier('tier_1').order(11).id('caveopolis:shops/bone_block')
    event.recipes.shops.shop('8x minecraft:gravel', 3, 1).tier('tier_1').order(12).id('caveopolis:shops/gravel')
    event.recipes.shops.shop('8x minecraft:cobblestone', 3, 0).tier('tier_1').order(13).id('caveopolis:shops/cobblestone')
    event.recipes.shops.shop('8x minecraft:sand', 3, 1).tier('tier_1').order(14).id('caveopolis:shops/sand')
    event.recipes.shops.shop('8x minecraft:dirt', 3, 1).tier('tier_1').order(15).id('caveopolis:shops/dirt')
    event.recipes.shops.shop('8x minecraft:stone', 3, 1).tier('tier_1').order(16).id('caveopolis:shops/stone')

    event.recipes.shops.shop('4x strainers:water_drop', 3, 1).tier('tier_1').order(21).id('caveopolis:shops/water_drop')

    event.recipes.shops.shop('caveopolis:stone_hammer[castingtools:modifier_component={modifiers:{"castingtools:excavation":1,"castingtools:pulverizing":1}},custom_name="Super Pulverizing Hammer"]', 25, 0)
        .tier('tier_1').order(31).id('caveopolis:shops/super_pulverizing_hammer')

    //Tier 2
    event.recipes.shops.shop('4x strainers:purifying_drop', 8, 1).tier('tier_2').order(1).id('caveopolis:shops/purifying_drop')
    event.recipes.shops.shop('4x caveopolis:makeshift_fuel_drop', 8, 1).tier('tier_2').order(2).id('caveopolis:shops/makeshift_fuel_drop')

    event.recipes.shops.shop('8x strainers:purified_sand', 5, 1).tier('tier_2').order(11).id('caveopolis:shops/purified_sand')
    event.recipes.shops.shop('8x strainers:purified_gravel', 5, 1).tier('tier_2').order(12).id('caveopolis:shops/purified_gravel')
    event.recipes.shops.shop('8x strainers:purified_dust_block', 5, 1).tier('tier_2').order(13).id('caveopolis:shops/purified_dust_block')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="copper"]', 12, 0).tier('tier_2').order(21).id('caveopolis:shops/copper_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="tin"]', 12, 0).tier('tier_2').order(22).id('caveopolis:shops/tin_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="zinc"]', 12, 0).tier('tier_2').order(23).id('caveopolis:shops/zinc_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="coal"]', 12, 0).tier('tier_2').order(24).id('caveopolis:shops/coal_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="aluminum"]', 12, 0).tier('tier_2').order(25).id('caveopolis:shops/aluminum_ore_piece')

    event.recipes.shops.shop('cloche:cloche', 16, 3).tier('tier_2').order(31).id('caveopolis:shops/cloche')
    event.recipes.shops.shop('casting:experience_ball', 8, 2).tier('tier_2').order(32).id('caveopolis:shops/experience_ball')
    event.recipes.shops.shop('casting:gear_mold', 8, 0).tier('tier_2').order(33).id('caveopolis:shops/gear_mold')
    event.recipes.shops.shop('casting:ball_mold', 12, 0).tier('tier_2').order(34).id('caveopolis:shops/ball_mold')
    event.recipes.shops.shop('casting:ingot_mold', 12, 0).tier('tier_2').order(35).id('caveopolis:shops/ingot_mold')
    event.recipes.shops.shop('casting:block_mold', 12, 0).tier('tier_2').order(36).id('caveopolis:shops/block_mold')
    event.recipes.shops.shop('casting:rod_mold', 12, 0).tier('tier_2').order(37).id('caveopolis:shops/rod_mold')
    event.recipes.shops.shop('cloche:mutation_upgrade', 24, 0).tier('tier_2').order(38).id('caveopolis:shops/mutation_upgrade')

    event.recipes.shops.shop('strainers:seed_bag', 9, 2).tier('tier_2').order(41).id('caveopolis:shops/seed_bag')
    event.recipes.shops.shop('enderio:xp_vacuum', 8, 0).tier('tier_2').order(42).id('caveopolis:shops/xp_vacuum')

    event.recipes.shops.shop('functionalstorage:configuration_tool', 24, 0).tier('tier_2').order(51).id('caveopolis:shops/configuration_tool')
    event.recipes.shops.shop('functionalstorage:linking_tool', 24, 0).tier('tier_2').order(52).id('caveopolis:shops/linking_tool')
    event.recipes.shops.shop('functionalstorage:void_upgrade', 4, 0).tier('tier_2').order(52).id('caveopolis:shops/void_upgrade')
    event.recipes.shops.shop('functionalstorage:fluid_1', 8, 0).tier('tier_2').order(53).id('caveopolis:shops/fluid_1')
    event.recipes.shops.shop('functionalstorage:framed_fluid_1', 8, 0).tier('tier_2').order(54).id('caveopolis:shops/framed_fluid_1')
    event.recipes.shops.shop('functionalstorage:fluid_2', 8, 0).tier('tier_2').order(55).id('caveopolis:shops/fluid_2')
    event.recipes.shops.shop('functionalstorage:framed_fluid_2', 8, 0).tier('tier_2').order(56).id('caveopolis:shops/framed_fluid_2')
    event.recipes.shops.shop('functionalstorage:fluid_4', 8, 0).tier('tier_2').order(57).id('caveopolis:shops/fluid_4')
    event.recipes.shops.shop('functionalstorage:framed_fluid_4', 8, 0).tier('tier_2').order(58).id('caveopolis:shops/framed_fluid_4')
    event.recipes.shops.shop('functionalstorage:framed_1', 8, 0).tier('tier_2').order(59).id('caveopolis:shops/framed_1')
    event.recipes.shops.shop('functionalstorage:framed_2', 8, 0).tier('tier_2').order(60).id('caveopolis:shops/framed_2')
    event.recipes.shops.shop('functionalstorage:framed_4', 8, 0).tier('tier_2').order(61).id('caveopolis:shops/framed_4')

    
    //Tier 3
    event.recipes.shops.shop('4x caveopolis:improvised_lava_drop', 12, 0).tier('tier_3').order(1).id('caveopolis:shops/improvised_lava_drop')
    
    event.recipes.shops.shop('3x minecraft:bone', 6, 2).tier('tier_3').order(11).id('caveopolis:shops/bone')
    event.recipes.shops.shop('3x minecraft:rotten_flesh', 6, 2).tier('tier_3').order(12).id('caveopolis:shops/rotten_flesh')
    event.recipes.shops.shop('3x minecraft:spider_eye', 6, 2).tier('tier_3').order(13).id('caveopolis:shops/spider_eye')
    event.recipes.shops.shop('3x minecraft:leather', 12, 4).tier('tier_3').order(14).id('caveopolis:shops/leather')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="redstone"]', 12, 0).tier('tier_3').order(21).id('caveopolis:shops/redstone_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="iron"]', 12, 0).tier('tier_3').order(22).id('caveopolis:shops/iron_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="nickel"]', 12, 0).tier('tier_3').order(23).id('caveopolis:shops/nickel_ore_piece')

    event.recipes.shops.shop('functionalstorage:storage_controller', 38, 0).tier('tier_3').order(53).id('caveopolis:shops/storage_controller')
    event.recipes.shops.shop('functionalstorage:framed_storage_controller', 38, 0).tier('tier_3').order(54).id('caveopolis:shops/framed_storage_controller')
    event.recipes.shops.shop('functionalstorage:controller_extension', 38, 0).tier('tier_3').order(55).id('caveopolis:shops/controller_extension')
    event.recipes.shops.shop('functionalstorage:framed_controller_extension', 38, 0).tier('tier_3').order(56).id('caveopolis:shops/framed_controller_extension')
    event.recipes.shops.shop('functionalstorage:simple_compacting_drawer', 16, 0).tier('tier_3').order(60).id('caveopolis:shops/simple_compacting_drawer')
    event.recipes.shops.shop('functionalstorage:framed_simple_compacting_drawer', 16, 0).tier('tier_3').order(61).id('caveopolis:shops/framed_simple_compacting_drawer')
    event.recipes.shops.shop('functionalstorage:compacting_drawer', 16, 0).tier('tier_3').order(62).id('caveopolis:shops/compacting_drawer')
    event.recipes.shops.shop('functionalstorage:compacting_framed_drawer', 16, 0).tier('tier_3').order(63).id('caveopolis:shops/framed_compacting_drawer')

    colors.forEach((color) => {
        event.recipes.shops.shop('elevatorid:elevator_' + color, 8, 0).tier('tier_3').order(31).id('caveopolis:shops/' + color + '_log')
    })

    //Tier 4
    event.recipes.shops.shop('4x adrenaline:adrenaline_shot', 6, 1).tier('tier_4').order(1).id('caveopolis:shops/adrenaline')
    event.recipes.shops.shop('minecraft:sniffer_egg', 6, 1).tier('tier_4').order(2).id('caveopolis:shops/sniffer_egg')
    event.recipes.shops.shop('sniffysniffers:sniffy_sniffer_egg', 6, 1).tier('tier_4').order(3).id('caveopolis:shops/sniffy_sniffer_egg')
    event.recipes.shops.shop('pantryforblockheads:lemon_sapling', 12, 0).tier('tier_4').order(5).id('caveopolis:shops/lemon_sapling')
    event.recipes.shops.shop('pantryforblockheads:peach_sapling', 12, 0).tier('tier_4').order(6).id('caveopolis:shops/peach_sapling')
    event.recipes.shops.shop('caveopolis:suspicious_stick', 9, 2).tier('tier_4').order(7).id('caveopolis:shops/suspicious_stick')
    event.recipes.shops.shop('caveopolis:suspicious_flint', 9, 2).tier('tier_4').order(8).id('caveopolis:shops/suspicious_flint')

    event.recipes.shops.shop('mysticalagriculture:mystical_fertilizer', 0, 3).tier('tier_4').order(11).id('caveopolis:shops/mystical_fertilizer')


    //Tier 5
    event.recipes.shops.shop('mysticalagriculture:earth_seeds', 50, 2).tier('tier_5').order(2).id('caveopolis:shops/earth_seeds')
    event.recipes.shops.shop('mysticalagriculture:water_seeds', 50, 2).tier('tier_5').order(3).id('caveopolis:shops/water_seeds')
    event.recipes.shops.shop('mysticalagriculture:fire_seeds', 50, 2).tier('tier_5').order(4).id('caveopolis:shops/fire_seeds')
    event.recipes.shops.shop('mysticalagriculture:air_seeds', 50, 2).tier('tier_5').order(5).id('caveopolis:shops/air_seeds')


    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="gold"]', 12, 0).tier('tier_5').order(21).id('caveopolis:shops/gold_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="inferium"]', 12, 0).tier('tier_5').order(22).id('caveopolis:shops/inferium_ore_piece')


    //Tier 6
    event.recipes.shops.shop('caveopolis:base_prosperity_seeds_tier_1', 8, 0).tier('tier_6').order(1).id('caveopolis:shops/base_prosperity_seeds_tier_1')
    event.recipes.shops.shop('caveopolis:base_prosperity_seeds_tier_2', 16, 0).tier('tier_6').order(2).id('caveopolis:shops/base_prosperity_seeds_tier_2')
    event.recipes.shops.shop('4x ae2:certus_quartz_crystal', 7, 1).tier('tier_6').order(4).id('caveopolis:shops/certus_quartz_crystal')
    event.recipes.shops.shop('4x minecraft:prismarine_shard', 10, 1).tier('tier_6').order(6).id('caveopolis:shops/prismarine_shard')
    event.recipes.shops.shop('4x minecraft:prismarine_crystals', 10, 1).tier('tier_6').order(7).id('caveopolis:shops/prismarine_crystal')
    event.recipes.shops.shop('caveopolis:trader_hut_mesh', 100, 0).tier('tier_6').order(8).id('caveopolis:shops/trader_hut_mesh')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="quartz"]', 12, 0).tier('tier_6').order(21).id('caveopolis:shops/quartz_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="osmium"]', 12, 0).tier('tier_6').order(22).id('caveopolis:shops/osmium_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="lapis"]', 12, 0).tier('tier_6').order(23).id('caveopolis:shops/lapis_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="salt"]', 12, 0).tier('tier_6').order(23).id('caveopolis:shops/salt_ore_piece')

    //Tier 7
    event.recipes.shops.shop('8x minecraft:blaze_rod', 0, 1).tier('tier_7').order(1).id('caveopolis:shops/blaze_rod')
    event.recipes.shops.shop('3x minecraft:glowstone', 8, 1).tier('tier_7').order(3).id('caveopolis:shops/glowstone')
    event.recipes.shops.shop('caveopolis:base_prosperity_seeds_tier_3', 24, 0).tier('tier_7').order(4).id('caveopolis:shops/base_prosperity_seeds_tier_3')

    event.recipes.shops.shop('ae2:cell_component_1k', 12, 3).tier('tier_7').order(11).id('caveopolis:shops/cell_component_1k')
    event.recipes.shops.shop('ae2:cell_component_4k', 48, 12).tier('tier_7').order(12).id('caveopolis:shops/cell_component_4k')
    event.recipes.shops.shop('ae2:cell_component_16k', 192, 48).tier('tier_7').order(13).id('caveopolis:shops/cell_component_16k')
    event.recipes.shops.shop('ae2:cell_component_64k', 768, 192).tier('tier_7').order(14).id('caveopolis:shops/cell_component_64k')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="uranium"]', 12, 0).tier('tier_7').order(21).id('caveopolis:shops/uranium_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="silver"]', 12, 0).tier('tier_7').order(22).id('caveopolis:shops/silver_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="diamond"]', 12, 0).tier('tier_7').order(23).id('caveopolis:shops/diamond_ore_piece')

    //Tier 8
    event.recipes.shops.shop('3x enderio:grains_of_infinity', 16, 1).tier('tier_8').order(1).id('caveopolis:shops/grains_of_infinity')
    event.recipes.shops.shop('3x caveopolis:matter_block', 32, 7).tier('tier_8').order(2).id('caveopolis:shops/matter_block')
    event.recipes.shops.shop('3x caveopolis:oil_drop', 7, 1).tier('tier_8').order(3).id('caveopolis:shops/oil_drop')
    event.recipes.shops.shop('minecraft:netherite_upgrade_smithing_template', 60, 0).tier('tier_8').order(4).id('caveopolis:shops/netherite_upgrade_smithing_template')
    event.recipes.shops.shop('caveopolis:trader_hut_explorer', 100, 0).tier('tier_8').tierWhenBought('explorer_1').order(5).id('caveopolis:shops/explorer_trader_hut')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="emerald"]', 12, 0).tier('tier_8').order(51).id('caveopolis:shops/emerald_ore_piece')
    event.recipes.shops.shop('4x strainers:ore_piece[strainers:ore_type="netherite_scrap"]', 12, 0).tier('tier_8').order(52).id('caveopolis:shops/netherite_scrap_ore_piece')
    event.recipes.shops.shop('4x strainers:ore_piece[strainers:ore_type="prosperity"]', 12, 0).tier('tier_8').order(53).id('caveopolis:shops/prosperity_ore_piece')

    //Tier 9
    event.recipes.shops.shop('caveopolis:base_prosperity_seeds_tier_4', 32, 0).tier('tier_9').order(1).id('caveopolis:shops/base_prosperity_seeds_tier_4')
    event.recipes.shops.shop('caveopolis:base_prosperity_seeds_tier_5', 40, 0).tier('tier_9').order(2).id('caveopolis:shops/base_prosperity_seeds_tier_5')
    event.recipes.shops.shop('castingtools:omnithium_ingot', 30, 3).tier('tier_9').order(3).id('caveopolis:shops/omnithium_ingot')
    event.recipes.shops.shop('4x mysticalagriculture:cognizant_dust', 56, 3).tier('tier_9').order(4).id('caveopolis:shops/cognizant_dust')
    event.recipes.shops.shop('castingtools:omnithium_upgrade_smithing_template', 120, 0).tier('tier_9').order(5).id('caveopolis:shops/omnithium_upgrade_smithing_template')

    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="soulium"]', 12, 0).tier('tier_9').order(21).id('caveopolis:shops/soulium_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="ruby"]', 12, 0).tier('tier_9').order(21).id('caveopolis:shops/ruby_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="peridot"]', 12, 0).tier('tier_9').order(21).id('caveopolis:shops/peridot_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="sapphire"]', 12, 0).tier('tier_9').order(21).id('caveopolis:shops/sapphire_ore_piece')
    event.recipes.shops.shop('12x strainers:ore_piece[strainers:ore_type="platinum"]', 12, 0).tier('tier_9').order(21).id('caveopolis:shops/platinum_ore_piece')



    //Trader - Light Gray House - Tier 1
    event.recipes.shops.shop('16x colors:light_gray_log', 8, 2).trader('caveopolis:trader_hut_light_gray_house')
        .order(1).tierWhenBought('light_gray_house_1').id('caveopolis:shops/trader/light_gray_log')

    //Trader - Light Gray House - Tier 1
    event.recipes.shops.shop('8x colors:light_gray_apple', 12, 4).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_1').order(3).id('caveopolis:shops/trader/light_gray_apple')

    event.recipes.shops.shop('minecraft:stone_sword[custom_name="Mr Grayson\'s Sword of Justice"]', 30, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_1').order(1).tierWhenBought('light_gray_house_2').id('caveopolis:shops/trader/mr_grayson_sword')

    //Trader - Light Gray House - Tier 2
    event.recipes.shops.shop('minecraft:stone_pickaxe[custom_name="Mr Grayson\'s Pickaxe of Justice"]', 40, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_2').order(1).tierWhenBought('light_gray_house_3').id('caveopolis:shops/trader/mr_grayson_pickaxe')

    event.recipes.shops.shop('utility:compactor', 6, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_2').order(2).id('caveopolis:shops/trader/compactor')

    event.recipes.shops.shop('24x casting:black_brick', 6, 3).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_2').order(3).id('caveopolis:shops/trader/black_brick')

    event.recipes.shops.shop('6x casting:black_bricks', 6, 3).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_2').order(4).id('caveopolis:shops/trader/black_bricks')

    event.recipes.shops.shop('caveopolis:coin_mold', 40, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_2').order(5).id('caveopolis:shops/trader/coin_mold')

    //Trader - Light Gray House - Tier 3
    event.recipes.shops.shop('caveopolis:improvised_lava_drop', 5, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(1).tierWhenBought('light_gray_house_4').id('caveopolis:shops/trader/improvised_lava_drop')

    event.recipes.shops.shop('classicpipes:diamond_pipe', 10, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(2).id('caveopolis:shops/trader/diamond_pipe')
    
    event.recipes.shops.shop('8x classicpipes:diamond_pipe', 50, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(3).id('caveopolis:shops/trader/diamond_pipe_bulk')
    
    event.recipes.shops.shop('classicpipes:obsidian_pipe', 10, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(4).id('caveopolis:shops/trader/obsidian_pipe')
    
    event.recipes.shops.shop('8x classicpipes:obsidian_pipe', 50, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(5).id('caveopolis:shops/trader/obsidian_pipe_bulk')

    event.recipes.shops.shop('classicpipes:diamond_fluid_pipe', 10, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(6).id('caveopolis:shops/trader/diamond_fluid_pipe')  

    event.recipes.shops.shop('8x classicpipes:diamond_fluid_pipe', 50, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(7).id('caveopolis:shops/trader/diamond_fluid_pipe_bulk')

    event.recipes.shops.shop('classicpipes:obsidian_fluid_pipe', 10, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(8).id('caveopolis:shops/trader/obsidian_fluid_pipe')

    event.recipes.shops.shop('8x classicpipes:obsidian_fluid_pipe', 50, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(9).id('caveopolis:shops/trader/obsidian_fluid_pipe_bulk')

    event.recipes.shops.shop('4x alltheores:bronze_ingot', 8, 3).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_3').order(10).id('caveopolis:shops/trader/bronze_ingot')

    //Trader - Light Gray House - Tier 4
    event.recipes.shops.shop('rooms:placer', 32, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_4').order(1).id('caveopolis:shops/trader/rooms_placer')

    event.recipes.shops.shop('caveopolis:depth_charm_i', 32, 0).trader('caveopolis:trader_hut_light_gray_house')
        .tier('light_gray_house_4').order(2).id('caveopolis:shops/trader/depth_charm_i')


    //Trader - Farmer - Tier 1
    event.recipes.shops.shop('4x mysticalagriculture:prosperity_shard', 24, 0).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_1').order(1).tierWhenBought('farmer_2').id('caveopolis:shops/trader/prosperity_shard')

    event.recipes.shops.shop('4x mysticalagriculture:inferium_essence', 12, 0).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_1').order(2).id('caveopolis:shops/trader/inferium_essence')

    event.recipes.shops.shop('9x minecraft:bone_meal', 4, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_1').order(3).id('caveopolis:shops/trader/bone_meal')

    event.recipes.shops.shop('minecraft:bone_block', 4, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_1').order(4).id('caveopolis:shops/trader/bone_block')

    //Trader - Farmer - Tier 2  
    event.recipes.shops.shop('3x mysticalagriculture:earth_essence', 6, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(1).id('caveopolis:shops/trader/earth_essence')

    event.recipes.shops.shop('3x mysticalagriculture:water_essence', 6, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(2).id('caveopolis:shops/trader/water_essence')

    event.recipes.shops.shop('3x mysticalagriculture:fire_essence', 6, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(3).id('caveopolis:shops/trader/fire_essence')

    event.recipes.shops.shop('3x mysticalagriculture:air_essence', 6, 1).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(4).id('caveopolis:shops/trader/air_essence')

    event.recipes.shops.shop('pantryforblockheads:lemon_sapling', 12, 0).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(5).id('caveopolis:shops/trader/lemon_sapling')

    event.recipes.shops.shop('pantryforblockheads:peach_sapling', 12, 0).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(6).id('caveopolis:shops/trader/peach_sapling')

    event.recipes.shops.shop('minecraft:beehive[bees=[{entity_data:{AbsorptionAmount:0.0f,Age:0,AgeLocked:0b,ForcedAge:0,HasNectar:0b,HasStung:0b,Health:10.0f,InLove:0,Invulnerable:0b,NeoForgeData:{},PersistenceRequired:0b,anger_end_time:-1L,attributes:[{base:0.30000001192092896d,id:"minecraft:movement_speed"},{base:16.0d,id:"minecraft:follow_range",modifiers:[{amount:-0.056217253339663154d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],current_impulse_context_reset_grace_time:0,id:"minecraft:bee","neoforge:spawn_type":"SPAWN_ITEM_USE"},min_ticks_in_hive:600,ticks_in_hive:920},{entity_data:{AbsorptionAmount:0.0f,Age:0,AgeLocked:0b,ForcedAge:0,HasNectar:0b,HasStung:0b,Health:10.0f,InLove:0,Invulnerable:0b,NeoForgeData:{},PersistenceRequired:0b,anger_end_time:-1L,attributes:[{base:0.30000001192092896d,id:"minecraft:movement_speed"},{base:16.0d,id:"minecraft:follow_range",modifiers:[{amount:0.029875266832858325d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],current_impulse_context_reset_grace_time:0,id:"minecraft:bee","neoforge:spawn_type":"SPAWN_ITEM_USE"},min_ticks_in_hive:600,ticks_in_hive:824},{entity_data:{AbsorptionAmount:0.0f,Age:0,AgeLocked:0b,ForcedAge:0,HasNectar:0b,HasStung:0b,Health:10.0f,InLove:0,Invulnerable:0b,NeoForgeData:{},PersistenceRequired:0b,anger_end_time:-1L,attributes:[{base:0.30000001192092896d,id:"minecraft:movement_speed"},{base:16.0d,id:"minecraft:follow_range",modifiers:[{amount:-0.0448510421846062d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],current_impulse_context_reset_grace_time:0,id:"minecraft:bee","neoforge:spawn_type":"SPAWN_ITEM_USE"},min_ticks_in_hive:600,ticks_in_hive:764}]]', 12, 0).trader('caveopolis:trader_hut_farmer')
        .tier('farmer_2').order(7).id('caveopolis:shops/trader/beehive')

    //Trader - Kitchen - Tier 1
    colors.forEach((color) => {
        event.recipes.shops.shop('cookingforblockheads:' + color + '_counter', 12, 0).trader('caveopolis:trader_hut_kitchen')
            .tier('kitchen_1').order(1).tierWhenBought('kitchen_2').id('caveopolis:shops/trader/' + color + '_counter')

        event.recipes.shops.shop('cookingforblockheads:' + color + '_connector', 12, 0).trader('caveopolis:trader_hut_kitchen')
            .tier('kitchen_1').order(2).id('caveopolis:shops/trader/' + color + '_connector')
    })

    event.recipes.shops.shop('cookingforblockheads:sink', 40, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_1').order(3).id('caveopolis:shops/trader/sink')

    event.recipes.shops.shop('8x pantryforblockheads:flatbread', 12, 4).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_1').order(4).id('caveopolis:shops/trader/flatbread')

    event.recipes.shops.shop('24x pantryforblockheads:breadstick', 12, 4).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_1').order(5).id('caveopolis:shops/trader/breadstick')

    event.recipes.shops.shop('minecraft:wheat_seeds', 4, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_1').order(6).id('caveopolis:shops/trader/wheat_seeds')

    //Trader - Kitchen - Tier 2
    event.recipes.shops.shop('cookingforblockheads:recipe_book', 32, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_2').order(1).tierWhenBought('kitchen_3').id('caveopolis:shops/trader/recipe_book')

    event.recipes.shops.shop('cookingforblockheads:cow_jar', 64, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_2').order(2).id('caveopolis:shops/trader/cow_jar')

    event.recipes.shops.shop('cookingforblockheads:chef_hat', 0, 12).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_2').order(3).id('caveopolis:shops/trader/chef_hat')

    event.recipes.shops.shop('cookingforblockheads:ice_unit', 32, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_2').order(4).id('caveopolis:shops/trader/ice_unit')

    event.recipes.shops.shop('cookingforblockheads:salt_filter', 32, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_2').order(5).id('caveopolis:shops/trader/salt_filter')

    //Trader - Kitchen - Tier 3
    event.recipes.shops.shop('cookingforblockheads:crafting_book', 32, 0).trader('caveopolis:trader_hut_kitchen')
        .tier('kitchen_3').order(1).id('caveopolis:shops/trader/crafting_book')


    //Trader - Explorer - Tier 1
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:mineshaft"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').tierWhenBought('explorer_2').order(14).id('caveopolis:shops/trader/mineshaft_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:stronghold"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(15).id('caveopolis:shops/trader/stronghold_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:igloo"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(16).id('caveopolis:shops/trader/igloo_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_taiga"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(16).id('caveopolis:shops/trader/village_taiga_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:shipwreck"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(17).id('caveopolis:shops/trader/shipwreck_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:bastion"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(18).id('caveopolis:shops/trader/bastion_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:desert_pyramid"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(19).id('caveopolis:shops/trader/desert_pyramid_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_desert"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(20).id('caveopolis:shops/trader/village_desert_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_plains"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(21).id('caveopolis:shops/trader/village_plains_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_common"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(23).id('caveopolis:shops/trader/village_common_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:pillager_outpost"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(24).id('caveopolis:shops/trader/pillager_outpost_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_snowy"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(25).id('caveopolis:shops/trader/village_snowy_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:ruined_portal"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(26).id('caveopolis:shops/trader/ruined_portal_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:trial_chambers"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(27).id('caveopolis:shops/trader/trial_chambers_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:village_savanna"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(28).id('caveopolis:shops/trader/village_savanna_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:jungle_temple"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(29).id('caveopolis:shops/trader/jungle_temple_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:woodland_mansion"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(30).id('caveopolis:shops/trader/woodland_mansion_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:nether_fortress"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(31).id('caveopolis:shops/trader/nether_fortress_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:simple_dungeon"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(32).id('caveopolis:shops/trader/simple_dungeon_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:ocean_ruin"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(33).id('caveopolis:shops/trader/ocean_ruin_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:buried_treasure"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(34).id('caveopolis:shops/trader/buried_treasure_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:ancient_city"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(35).id('caveopolis:shops/trader/ancient_city_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="minecraft:end_city"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(36).id('caveopolis:shops/trader/end_city_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="caveopolis:light_gray_house"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(36).id('caveopolis:shops/trader/light_gray_house_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="caveopolis:farm"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(36).id('caveopolis:shops/trader/farm_structure_token')
    event.recipes.shops.shop('structureloot:structure_token[structureloot:loot_id="caveopolis:kitchen"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_1').order(36).id('caveopolis:shops/trader/kitchen_structure_token')
    
    //Trader - Explorer - Tier 2
    event.recipes.shops.shop('minecraft:music_disc_relic', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').tierWhenBought('explorer_3').order(1).id('caveopolis:shops/trader/music_disc_relic')
    event.recipes.shops.shop('minecraft:host_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(2).id('caveopolis:shops/trader/host_armor_trim_smithing_template')
    event.recipes.shops.shop('minecraft:shaper_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(3).id('caveopolis:shops/trader/shaper_armor_trim_smithing_template')
    event.recipes.shops.shop('minecraft:raiser_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(4).id('caveopolis:shops/trader/raiser_armor_trim_smithing_template')
    event.recipes.shops.shop('minecraft:wayfinder_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(5).id('caveopolis:shops/trader/wayfinder_armor_trim_smithing_template')
    event.recipes.shops.shop('minecraft:silence_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(6).id('caveopolis:shops/trader/silence_armor_trim_smithing_template')
    event.recipes.shops.shop('minecraft:tide_armor_trim_smithing_template', 50, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_2').order(7).id('caveopolis:shops/trader/tide_armor_trim_smithing_template')

    //Trader - Explorer - Tier 3
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:shulker"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').tierWhenBought('explorer_4').order(1).id('caveopolis:shops/trader/shulker_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:evoker"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(2).id('caveopolis:shops/trader/evoker_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:vindicator"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(3).id('caveopolis:shops/trader/vindicator_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:pillager"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(4).id('caveopolis:shops/trader/pillager_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:ravager"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(5).id('caveopolis:shops/trader/ravager_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:witch"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(6).id('caveopolis:shops/trader/witch_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:zombie"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(7).id('caveopolis:shops/trader/zombie_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:skeleton"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(8).id('caveopolis:shops/trader/skeleton_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:creeper"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(9).id('caveopolis:shops/trader/creeper_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:spider"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(10).id('caveopolis:shops/trader/spider_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:enderman"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(11).id('caveopolis:shops/trader/enderman_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:blaze"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(12).id('caveopolis:shops/trader/blaze_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:breeze"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(13).id('caveopolis:shops/trader/breeze_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:magma_cube"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(14).id('caveopolis:shops/trader/magma_cube_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:guardian"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(15).id('caveopolis:shops/trader/guardian_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:slime"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(17).id('caveopolis:shops/trader/slime_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:bee"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(18).id('caveopolis:shops/trader/bee_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:fox"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(19).id('caveopolis:shops/trader/fox_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:wolf"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(20).id('caveopolis:shops/trader/wolf_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:cat"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(21).id('caveopolis:shops/trader/cat_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:horse"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(22).id('caveopolis:shops/trader/horse_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:donkey"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(23).id('caveopolis:shops/trader/donkey_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:mule"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(24).id('caveopolis:shops/trader/mule_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:llama"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(25).id('caveopolis:shops/trader/llama_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:pig"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(26).id('caveopolis:shops/trader/pig_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:sheep"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(27).id('caveopolis:shops/trader/sheep_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:chicken"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(28).id('caveopolis:shops/trader/chicken_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:rabbit"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(29).id('caveopolis:shops/trader/rabbit_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:turtle"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(30).id('caveopolis:shops/trader/turtle_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:villager"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(31).id('caveopolis:shops/trader/villager_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:wandering_trader"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(32).id('caveopolis:shops/trader/wandering_trader_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:polar_bear"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(33).id('caveopolis:shops/trader/polar_bear_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:mooshroom"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(34).id('caveopolis:shops/trader/mooshroom_token')
    event.recipes.shops.shop('structureloot:entity_token[structureloot:loot_id="minecraft:ocelot"]', 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_3').order(35).id('caveopolis:shops/trader/ocelot_token')

    //Trader - Explorer - Tier 4
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 3.5, specializations: { fuel_efficiency: 3.5 } } }), 100, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').tierWhenBought('explorer_5').order(1).id('caveopolis:shops/trader/enderio_capacitor_1')
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 4.0, specializations: { fuel_efficiency: 4.0 } } }), 150, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').order(2).id('caveopolis:shops/trader/enderio_capacitor_2')
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 4.5, specializations: { fuel_efficiency: 4.5 } } }), 200, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').order(3).id('caveopolis:shops/trader/enderio_capacitor_3')
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 5.0, specializations: { fuel_efficiency: 5.0 } } }), 250, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').order(4).id('caveopolis:shops/trader/enderio_capacitor_4')
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 10.0, specializations: { fuel_efficiency: 1.0 } } }), 500, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').order(5).id('caveopolis:shops/trader/enderio_capacitor_5')
    event.recipes.shops.shop(Item.of('enderio:loot_capacitor', { 'enderio:capacitor_data': { base: 1.0, specializations: { fuel_efficiency: 10.0 } } }), 500, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_4').order(6).id('caveopolis:shops/trader/enderio_capacitor_6')

    //Tader - Expolorer - Tier 5
    event.recipes.shops.shop(Item.of('enderio:broken_spawner[enderio:soul={EntityTag:{},EntityType:"minecraft:zombie"}]'), 150, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_5').order(1).id('caveopolis:shops/trader/broken_spawner_zombie')
    event.recipes.shops.shop(Item.of('enderio:broken_spawner[enderio:soul={EntityTag:{},EntityType:"minecraft:enderman"}]'), 150, 0).trader('caveopolis:trader_hut_explorer').tier('explorer_5').order(1).id('caveopolis:shops/trader/broken_spawner_enderman')


    //Trader - Meshalist - Tier 6
    event.recipes.shops.shop('strainers:iron_mesh[castingtools:modifier_component={modifiers:{"castingtools:efficiency":5,"castingtools:fortune":5}}]', 125, 0).trader('caveopolis:trader_hut_mesh').tier('tier_6').order(1).id('caveopolis:shops/trader/iron_mesh_fortune')
    event.recipes.shops.shop('strainers:gold_mesh[castingtools:modifier_component={modifiers:{"castingtools:efficiency":3, "castingtools:fortune":5}}]', 125, 0).trader('caveopolis:trader_hut_mesh').tier('tier_6').order(1).id('caveopolis:shops/trader/gold_mesh_fortune')
    
    //Trader - Meshalist - Tier 7
    event.recipes.shops.shop('strainers:diamond_mesh[castingtools:modifier_component={modifiers:{"castingtools:efficiency":5, "castingtools:fortune":7}}]', 175, 0).trader('caveopolis:trader_hut_mesh').tier('tier_7').order(1).id('caveopolis:shops/trader/diamond_mesh_fortune')

    //Trader - Meshalist - Tier 8
    event.recipes.shops.shop('strainers:emerald_mesh[castingtools:modifier_component={modifiers:{"castingtools:efficiency":7, "castingtools:fortune":8}}]', 250, 0).trader('caveopolis:trader_hut_mesh').tier('tier_8').order(1).id('caveopolis:shops/trader/emerald_mesh_fortune')

    //Trader - Meshalist - Tier 9
    event.recipes.shops.shop('caveopolis:omnithium_mesh[castingtools:modifier_component={modifiers:{"castingtools:efficiency":10, "castingtools:fortune":10}}]', 350, 0).trader('caveopolis:trader_hut_mesh').tier('tier_9').order(1).id('caveopolis:shops/trader/omnithium_mesh_fortune')

})
    