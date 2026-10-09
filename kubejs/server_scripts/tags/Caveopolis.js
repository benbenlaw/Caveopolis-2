//Caveopolis Tags

ServerEvents.tags('item', event => {

    //Banned from Casting Modifiers
    event.get('castingtools:not_modifiable').add([
        'mysticalagriculture:infusion_crystal'
    ])

    //Mystical Seeds
    tier1Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_1').add(seed)
    })

    tier2Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_2').add(seed)
    })

    tier3Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_3').add(seed)
    })

    tier4Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_4').add(seed)
    })

    tier5Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_5').add(seed)
    })

    tier6Seeds.forEach(seed => {
        event.get('caveopolis:mystical_seed_6').add(seed)
    })

    //Shimmer Crystal Ingredient
    event.get('caveopolis:shimmer_crystal_ingredient').add([
        'alltheores:ruby', 
        'alltheores:sapphire', 
        'alltheores:peridot'
    ])

    //Life Moss
    event.get('caveopolis:life_infused_moss').add('caveopolis:life_infused_moss')

    //Pipe Connector
    event.get('pipe_connector:placeable_items').add('@classicpipes')
        .remove([
            'classicpipes:tag_label', 
            'classicpipes:pipe_slicer', 
            'classicpipes:mod_label'
        ])

    //EnderIO - Just to make the gears a bit easier
    event.get('c:gears/energetic_alloy').add('enderio:energized_gear')
    event.get('c:gears/vibrant_alloy').add('enderio:vibrant_gear')

    //Drops
    event.get('caveopolis:drops').add([
        'strainers:water_drop', 
        'strainers:lava_drop', 
        'strainers:eroding_drop', 
        'strainers:purifying_drop', 
        'strainers:salt_water_drop',
        'caveopolis:oil_drop',
        'caveopolis:makeshift_fuel_drop'
    ])

    //Spyglasses
    event.get('geore:spyglasses').add('minecraft:spyglass')
    
    //RS (TEMP unit https://github.com/refinedmods/refinedstorage2/issues/1392 get fixed)
    event.get('c:ingots/quartz_enriched_iron').add('refinedstorage:quartz_enriched_iron')
    event.get('c:ingots/quartz_enriched_copper').add('refinedstorage:quartz_enriched_copper')

    //All Templates
    event.get('caveopolis:templates').add([
        'minecraft:netherite_upgrade_smithing_template', 
        'minecraft:sentry_armor_trim_smithing_template', 
        'minecraft:vex_armor_trim_smithing_template', 
        'minecraft:wild_armor_trim_smithing_template', 
        'minecraft:coast_armor_trim_smithing_template', 
        'minecraft:dune_armor_trim_smithing_template',
        'minecraft:wayfinder_armor_trim_smithing_template', 
        'minecraft:raiser_armor_trim_smithing_template', 
        'minecraft:shaper_armor_trim_smithing_template', 
        'minecraft:host_armor_trim_smithing_template', 
        'minecraft:ward_armor_trim_smithing_template', 
        'minecraft:silence_armor_trim_smithing_template', 
        'minecraft:tide_armor_trim_smithing_template', 
        'minecraft:snout_armor_trim_smithing_template', 
        'minecraft:rib_armor_trim_smithing_template', 
        'minecraft:eye_armor_trim_smithing_template', 
        'minecraft:spire_armor_trim_smithing_template', 
        'minecraft:flow_armor_trim_smithing_template', 
        'minecraft:bolt_armor_trim_smithing_template', 
        'castingtools:omnithium_upgrade_smithing_template', 
        'ae2:fluix_upgrade_smithing_template', 
        'constructionstick:template_angel', 
        'constructionstick:template_destruction', 
        'constructionstick:template_replacement', 
        'constructionstick:template_unbreakable', 
        'constructionstick:template_battery', 
        'constructionstick:stick_template'
    ])

    //Block Breaking
    event.get('minecraft:needs_diamond_tool').remove([
        'alltheores:osmium_ore',
        'alltheores:deepslate_osmium_ore'
    ])

    //Valid Upgrader Items
    event.get('castingtools:valid_upgrader_item').add([
        '#c:storage_blocks'
    ])

    //Removed Mystical Essence Crafts
    event.get('caveopolis:removed_mystical_essence_crafts').add([
        'mysticalagriculture:coal_essence',
        'mysticalagriculture:amethyst_essence',
        'mysticalagriculture:iron_essence',
        'mysticalagriculture:aluminum_essence',
        'mysticalagriculture:sulfur_essence',
        'mysticalagriculture:copper_essence',
        'mysticalagriculture:nether_quartz_essence',
        'mysticalagriculture:redstone_essence',
        'mysticalagriculture:lead_essence',
        'mysticalagriculture:silver_essence',
        'mysticalagriculture:zinc_essence',
        'mysticalagriculture:tin_essence',
        'mysticalagriculture:gold_essence',
        'mysticalagriculture:lapis_lazuli_essence',
        'mysticalagriculture:emerald_essence',
        'mysticalagriculture:diamond_essence',
        'mysticalagriculture:soulium_essence',
        'mysticalagriculture:peridot_essence',
        'mysticalagriculture:ruby_essence',
        'mysticalagriculture:sapphire_essence',
        'mysticalagriculture:uranium_essence',
        'mysticalagriculture:nickel_essence',
        'mysticalagriculture:iridium_essence'
    ])

    //Essence
    event.get('mysticalagriculture:essences').add([
        'mysticalagriculture:elemental_essence'
    ])

    //TEMP Removed AE2 from curios
    event.get('curios:curio').remove([
        'ae2:wireless_crafting_terminal'
    ])

    //No Modifiable 
    event.get('castingtools:not_modifiable').add([
        'extendedae:smart_annihilation_plane'
    ])
})

ServerEvents.tags('block', event => {

    //Doesn't block trees
    event.get('minecraft:replaceable_by_trees').add([
        'minecraft:light'
    ])
    
    //Banned Ultimine Blocks
    event.get('ftbultimine:excluded_blocks').add([
        '#c:stones'
    ])

    colors.forEach(color => {
        event.get('ftbultimine:excluded_blocks').add([
            `colors:${color}_stone`
        ])
    })

    //Sonar Breakable
    event.get('caveopolis:sonar_breakable').add([
        'minecraft:bedrock', 
        'caveopolis:toprock',
        '#c:budding_blocks'
    ])

    //Base Materials
    event.get('caveopolis:roof_materials').add([
        "#minecraft:planks",
        "#minecraft:logs",
        "#c:stones",
        "#c:cobblestones",
        "minecraft:stone_bricks"
    ])

    colors.forEach(color => {
        event.get('caveopolis:roof_materials').add([
            `colors:${color}_stone`,
            `colors:${color}_stone_bricks`
        ])
    })

    event.get('caveopolis:floor_materials').add([
        "#caveopolis:roof_materials"
    ])

    event.get('caveopolis:wall_materials').add([
        "#caveopolis:roof_materials"
    ])

    event.get('caveopolis:roof_materials_stairs').add([
        "#minecraft:stairs"
    ])

    event.get('caveopolis:floor_materials_stairs').add([
        "#minecraft:stairs"
    ])

    //Block Breaking
    event.get('minecraft:needs_diamond_tool').remove([
        'alltheores:osmium_ore',
        'alltheores:deepslate_osmium_ore'
    ])

    event.get('minecraft:incorrect_for_iron_tool').remove([
        'alltheores:osmium_ore',
        'alltheores:deepslate_osmium_ore'
    ])

    event.get('minecraft:needs_iron_tool').add([
        'alltheores:osmium_ore',
        'alltheores:deepslate_osmium_ore'
    ])

    //Wither Immune
    event.get('minecraft:wither_immune').add([
        'caveopolis:toprock'
    ])

    //Dragon Immune
    event.get('minecraft:dragon_immune').add([
        'caveopolis:toprock'
    ])

    //Relocation not Allowed
    event.get('c:relocation_not_supported').add([
        'minecraft:budding_amethyst',
        'ae2:flawless_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:damaged_budding_quartz'
    ])

    //Smart Crafting Valid Blocks
    event.get('smartcrafting:whitelisted_storage').add([
        '@functionalstorage',
        '@sophisticatedstorage'
    ])

})


ServerEvents.tags('entity_type', event => {
    event.get('utility:can_be_relocated').add([
        'shops:shop_trader'
    ])
})