//Loot JS

LootJS.lootTables(event => {

    const stoneLoot = LootEntry.alternative(
        LootEntry.of("minecraft:stone").when(c =>
            c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
        ), 
        LootEntry.of("minecraft:stone").when(c =>
            c.matchMainHand(ItemFilter.custom(stack => CastingTools.hasModifierEnchant(stack, "minecraft:silk_touch")))
        ), 
        LootEntry.of("minecraft:cobblestone").matchTool("#minecraft:pickaxes").matchTool(ItemFilter.not(ItemFilter.tag("#caveopolis:hammers"))),
        LootEntry.of("strainers:stone_pebble", [1, 3])
    )

    //Stone
    event.getLootTable("minecraft:blocks/stone").clear().createPool().addEntry(stoneLoot)

    //Warden
    event.getLootTable("minecraft:entities/warden").createPool().addEntry(LootEntry.of("caveopolis:sonic_charge"))

})