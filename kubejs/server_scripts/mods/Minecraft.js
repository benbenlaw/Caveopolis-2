//Minecraft Recipes

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'minecraft:hopper'}, 'minecraft:iron_ingot', '#c:ingots/aluminum')
    event.replaceInput({id: 'minecraft:blast_furnace'}, 'minecraft:iron_ingot', 'alltheores:zinc_ingot')
    event.replaceInput({id: 'minecraft:stonecutter'}, 'minecraft:iron_ingot', 'alltheores:bronze_ingot')
    
    //Hopper
    event.shaped('minecraft:hopper', ['A A', 'ABA', ' A '], {
        A: '#c:ingots/aluminum',
        B: 'woodenhopper:wooden_hopper'
    }).id('caveopolis:hopper')

    //Amethyst Block
    event.recipes.mysticalagriculture.ore_infusion('#c:storage_blocks/amethyst', ['minecraft:calcite', '12x mysticalagriculture:amethyst_essence']).id('caveopolis:amethyst_block')

    //Obsidian
    event.recipes.enderio.alloy_smelting('minecraft:obsidian', ['4x strainers:lava_drop', '4x strainers:water_drop'], 3200, 0.0).id('caveopolis:alloy_smelter/obsidian')

    //Netherite
    event.recipes.enderio.alloy_smelting('minecraft:netherite_ingot', ['4x minecraft:netherite_scrap', '4x #c:ingots/gold'], 6000, 0.1).id('caveopolis:alloy_smelter/netherite_ingot')
    event.remove({id: 'minecraft:netherite_ingot'})

    //Dragons Breath
    event.recipes.enderio.alloy_smelting('16x minecraft:dragon_breath', ['16x minecraft:glass_bottle', 'minecraft:dragon_head'], 10000, 0.0).id('caveopolis:alloy_smelter/dragon_breath')

    //Crafting Table
    event.shaped('minecraft:crafting_table', ['AA', 'AA'], {
        A: '#c:cobblestones'
    }).id('caveopolis:crafting_table')
    
    //Torch 
    event.smelting('minecraft:torch', 'minecraft:stick').cookingTime(100).id('caveopolis:torch')

})
