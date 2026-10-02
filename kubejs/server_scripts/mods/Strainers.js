//Strainers

ServerEvents.recipes(event => {

    //Removed
    event.remove({id: 'strainers:straining/cobblestone/eroding_drop'})
    event.remove({id: 'strainers:straining/sand/soul_sand'})
    event.remove({id: 'strainers:straining/dirt/soul_soil'})
    event.remove({id: 'strainers:straining/stone/deepslate'})
    event.remove({id: 'strainers:straining/purified_dust_block/amethyst_shard'})
    event.remove({id: 'strainers:gold_mesh'})

    //Strainer
    event.shaped('strainers:strainer', ['A A', 'A A', 'BBB'], {
        A: '#c:rods/wooden',
        B: '#c:stones'
    }).id('caveopolis:strainer')

    event.remove({id: 'strainers:strainer'})

    //Netherite Mesh
    event.smithing('strainers:netherite_mesh', 'minecraft:netherite_upgrade_smithing_template', 'strainers:emerald_mesh', 'caveopolis:awakened_netherite_ingot').id('caveopolis:smithing/netherite_mesh')
    event.remove({id: 'strainers:netherite_mesh'})

    //Emerald Mesh
    event.recipes.bblcore.shaped_component_copy('strainers:emerald_mesh', ['ABA', 'BCB', 'ABA'], {
        A: 'enderio_endergy:crystalline_alloy_ingot',
        B: '#c:gems/emerald',
        C: 'strainers:diamond_mesh'
    }, "strainers:diamond_mesh", ["minecraft:enchantments", "castingtools:modifier_component", "minecraft:damage"]
    ).id('caveopolis:strainers/emerald_mesh')

    event.remove({id: 'strainers:emerald_mesh'})

    //Diamond Mesh
    event.recipes.bblcore.shaped_component_copy('strainers:diamond_mesh', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:amethyst_shard',
        B: '#c:gems/diamond',
        C: 'strainers:gold_mesh'
    }, "strainers:gold_mesh", ["minecraft:enchantments", "castingtools:modifier_component", "minecraft:damage"]
    ).id('caveopolis:strainers/diamond_mesh')

    event.remove({id: 'strainers:diamond_mesh'})

    //Copper Mesh 
    event.recipes.bblcore.shaped_component_copy('strainers:copper_mesh', ['ABA', 'BCB', 'ABA'], {
        A: 'colors:orange_stone',
        B: '#c:ingots/copper',
        C: 'strainers:flint_mesh'
    }, "strainers:flint_mesh", ["minecraft:enchantments", "castingtools:modifier_component", "minecraft:damage"]
    ).id('caveopolis:strainers/copper_mesh')

    event.remove({id: 'strainers:copper_mesh'})

    //Iron Mesh 
    event.recipes.bblcore.shaped_component_copy('strainers:iron_mesh', ['ABA', 'BCB', 'ABA'], {
        A: 'caveopolis:suspicious_stick',
        B: '#c:ingots/iron',
        C: 'strainers:copper_mesh'
    }, "strainers:copper_mesh", ["minecraft:enchantments", "castingtools:modifier_component", "minecraft:damage"]
    ).id('caveopolis:strainers/iron_mesh')
    
    event.remove({id: 'strainers:iron_mesh'})

    //Flint Mesh 
    event.shaped('strainers:flint_mesh', ['ABA', 'BAB', 'ABA'], {
        A: '#c:rods/wooden',
        B: 'minecraft:flint'
    }).id('caveopolis:strainers/flint_mesh')

    //Lava Drop
    event.shaped('4x strainers:lava_drop', [' A ', 'ABA', ' A '], {
        A: 'mysticalagriculture:fire_essence',
        B: 'strainers:depleted_drop'
    }).id('caveopolis:strainers/lava_drop')
    event.remove({id: 'strainers:straining/netherrack/lava_drop'})

    //Water Drop
    event.shaped('4x strainers:water_drop', [' A ', 'ABA', ' A '], {
        A: 'mysticalagriculture:water_essence',
        B: 'strainers:depleted_drop'
    }).id('caveopolis:strainers/water_drop')
    event.remove({id: 'strainers:strainers/netherrack/water_drop'})

    //Prosperity
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="prosperity"]',  0.5], 'strainers:purified_netherrack', 7, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/prosperity')

    event.remove({id: 'strainers:straining/purified_dust_block/prosperity'})

    //Platinum
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="platinum"]',  0.5], 'colors:gray_stone', 8, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/platinum')

    event.remove({id: 'strainers:straining/purified_gravel/platinum'})

    //Ruby 
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="ruby"]',  0.5], 'colors:red_stone', 8, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/ruby')

    event.remove({id: 'strainers:straining/purified_gravel/ruby'})

    //Sapphire
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="sapphire"]',  0.5], 'colors:blue_stone', 8, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/sapphire')

    event.remove({id: 'strainers:straining/purified_gravel/sapphire'})

    //Iridium Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="iridium"]',  0.5], 'colors:light_gray_stone', 8, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/iridium')

    event.remove({id: 'strainers:straining/purified_gravel/iridium'})   

    //Peridot
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="peridot"]',  0.5], 'colors:yellow_stone', 8, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/peridot')

    event.remove({id: 'strainers:straining/purified_gravel/peridot'})   

    //End Stone
    event.recipes.strainers.strainer(['minecraft:end_stone', 1.0], 'colors:white_stone', 8, 0.0)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/end_stone')

    event.remove({id: 'strainers:straining/sandstone/end_stone'})

    //Eroding Drop
    event.recipes.strainers.strainer(['strainers:eroding_drop', 0.1], 'minecraft:gravel', 2, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/eroding_drop')

    event.remove({id: 'strainers:straining/gravel/eroding_drop'})

    //Makeshift Fuel Drop
    event.recipes.strainers.strainer(['caveopolis:makeshift_fuel_drop', 0.4], 'utility:mini_coal', 2, 0.05)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/makeshift_fuel_drop')

    //Wither Bone
    event.recipes.strainers.strainer(['bhc:wither_bone', 0.25], 'strainers:purified_soul_sand', 7, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/wither_bone')

    //Ghast Tier
    event.recipes.strainers.strainer(['minecraft:ghast_tear', 0.1], 'strainers:purified_soul_sand', 7, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/ghast_tear')

    //Blaze Powder
    event.recipes.strainers.strainer(['minecraft:blaze_powder', 0.25], 'strainers:purified_netherrack', 6, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/blaze_powder')

    event.remove({id: 'strainers:straining/purified_soul_sand/blaze_powder'})

    //Fluorite 
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="fluorite"]',  0.5], 'colors:magenta_stone', 6, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/fluorite')

    event.remove({id: 'strainers:straining/purified_gravel/fluorite'})

    //Mystical Fertilizer
    event.recipes.strainers.strainer(['mysticalagriculture:mystical_fertilizer', 0.1], 'minecraft:pitcher_plant', 3, 0.05)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/mystical_fertilizer')

    //Soul Stone
    event.recipes.strainers.strainer(['mysticalagriculture:soulstone', 0.1], 'strainers:purified_netherrack', 2, 0.1)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/soulstone')

    //Suspicious Stick
    event.recipes.strainers.strainer(['caveopolis:suspicious_stick', 0.1], 'minecraft:suspicious_sand', 2, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/suspicious_stick')

    //Suspicious Gravel
    event.recipes.strainers.strainer(['caveopolis:suspicious_flint', 0.1], 'minecraft:suspicious_gravel', 2, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/suspicious_gravel')

    //String
    event.recipes.strainers.strainer(['minecraft:string', 1.0], 'utility:leafy_string', 2, 0.0)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/string')

    //Salt Water Drop
    event.recipes.strainers.strainer(['strainers:salt_water_drop', 0.4], 'colors:cyan_stone', 5, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/salt_water_drop')

    event.remove({id: 'strainers:straining/sand/salt_water_drop'})

    //Ink Sac
    event.recipes.strainers.strainer(['minecraft:ink_sac', 0.1], 'strainers:purified_sand', 3, 0.05)
        .fluid('5x strainers:salty_water').id('caveopolis:strainers/strainer/ink_sac')

    //Purifying Drop
    event.recipes.strainers.strainer(['strainers:purifying_drop', 0.2], '#minecraft:leaves', 2, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/purifying_drop')

    event.remove({id: 'strainers:straining/gravel/purifying_drop'})

    //Netherrack
    event.recipes.strainers.strainer(['minecraft:netherrack', 1.0], 'minecraft:stone', 4, 0.0)
        .fluid('5x minecraft:lava').id('caveopolis:strainers/strainer/netherrack')
    
    event.remove({id: 'strainers:straining/stone/netherrack'})

    //Black Gold Nugget
    event.recipes.strainers.strainer(['caveopolis:black_gold_nugget', 0.85], 'minecraft:gold_nugget', 7, 0.05)
        .fluid('caveopolis:oil').id('caveopolis:strainers/strainer/black_gold_nugget')

    //Oil Drop
    event.recipes.strainers.strainer(['caveopolis:oil_drop',  0.5], 'colors:black_stone', 6, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/oil')  

    event.remove({id: 'strainers:straining/purified_gravel/emerald'})

    //Emerald Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="emerald"]',  0.5], 'colors:brown_stone', 6, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/emerald')  

    event.remove({id: 'strainers:straining/purified_gravel/emerald'})

    //Diamond Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="diamond"]',  0.5], 'colors:pink_stone', 5, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/diamond')  

    event.remove({id: 'strainers:straining/purified_gravel/diamond'})
    event.remove({id: 'strainers:straining/stone/netherrack'})

    //Silver Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="silver"]',  0.5], 'strainers:purified_gravel', 6, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/silver')  

    event.remove({id: 'strainers:straining/purified_gravel/silver'})

    //Flint
    event.recipes.strainers.strainer(['minecraft:flint',  0.3], 'strainers:purified_gravel', 1, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/flint')  

    //Lapis Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="lapis"]',  0.75], 'colors:blue_stone', 5, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/lapis')  

    event.remove({id: 'strainers:straining/purified_gravel/lapis'})

    //Lapis Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="osmium"]',  0.75], 'colors:light_blue_stone', 5, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/osmium')  

    event.remove({id: 'strainers:straining/purified_gravel/osmium'})

    //Gold Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="gold"]',  0.75], 'colors:lime_stone', 4, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/gold') 
        
    event.remove({id: 'strainers:straining/purified_gravel/gold'})
    event.remove({id: 'strainers:straining/purified_netherrack/gold'})    

    //Inferium Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="inferium"]',  1.0], 'colors:green_stone', 1, 0.25)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/inferium')  

    event.remove({id: 'strainers:straining/purified_dust_block/inferium'})

    //Glowstone
    event.recipes.strainers.strainer(['minecraft:glowstone_dust',  1.0], 'powah:uraninite', 1, 0.0)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/glowstone')

    //Rotten Bone
    event.recipes.strainers.strainer(['caveopolis:rotten_bone', 1.0], 'minecraft:bone', 3, 0.0)
        .fluid('5x strainers:eroding_water').id('caveopolis:strainers/strainer/rotten_bone')

    //Purified Dirt
    event.recipes.strainers.strainer(['strainers:purified_dirt', 1.0], 'minecraft:dirt', 2, 0.0)
        .fluid('5x strainers:purifying_water').id('caveopolis:strainers/strainer/purified_dirt')

    event.remove({id: 'strainers:straining/dirt/purified_dirt'})

    //Redstone Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type=redstone]',  0.75], 'colors:red_stone', 3, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/redstone_ore_piece')    
        
    event.remove({id: 'strainers:straining/purified_dust_block/redstone'})

    //Iron Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="iron"]',  0.75], 'colors:orange_stone', 3, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/iron_ore_piece')

    event.remove({id: 'strainers:straining/purified_gravel/iron'})

    //Nickel Ore Piece
    event.recipes.strainers.strainer(['strainers:ore_piece[strainers:ore_type="nickel"]',  0.75], 'colors:yellow_stone', 3, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/nickel_ore_piece')

    event.remove({id: 'strainers:straining/purified_gravel/nickel'})

    //Sniffer Egg
    event.recipes.strainers.strainer(['minecraft:sniffer_egg',  0.1], 'minecraft:blue_ice', 3, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/sniffer_egg')

    //Sniffy Sniffer Egg
    event.recipes.strainers.strainer(['sniffysniffers:sniffy_sniffer_egg',  0.1], 'minecraft:blue_ice', 3, 0.05)
        .fluid('5x minecraft:water').id('caveopolis:strainers/strainer/sniffy_sniffer_egg')


})
