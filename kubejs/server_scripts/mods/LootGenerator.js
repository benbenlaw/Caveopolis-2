//BBL Loot Generator

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'structureloot:structure_loot_block'},  '#c:chests/wooden', 'caveopolis:awakened_netherite_ingot')

    //Remove 
    event.remove({id: 'structureloot:structure_loot/end_city'})

    //Structures
    event.recipes.structureloot.structure_loot('caveopolis:light_gray_house',['caveopolis:chests/light_gray_house'], 1, 200, 500).id('caveopolis:structureloot/light_gray_house')
    event.recipes.structureloot.structure_loot('caveopolis:farm',['caveopolis:chests/farm'], 1, 200, 700).id('caveopolis:structureloot/farmer')
    event.recipes.structureloot.structure_loot('caveopolis:kitchen',['caveopolis:chests/kitchen'], 1, 200, 900).id('caveopolis:structureloot/kitchen')
    event.recipes.structureloot.structure_loot('minecraft:end_city',['lootr:chests/elytra', 'minecraft:chests/end_city_treasure'], 1, 500, 1200).id('caveopolis:structureloot/end_city')

})