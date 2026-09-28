//Powah

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'powah:energizing/uraninite_from_uranium'})

    //Matter Ingot
    event.recipes.powah.energizing('caveopolis:matter_ingot', 8000, ['ae2:matter_ball', 'ae2:matter_ball', 'ae2:matter_ball', 'ae2:matter_ball', 'mysticalagriculture:prosperity_ingot']).id('caveopolis:powah/energizing/matter_ingot')

    //Dielectric Paste
    event.recipes.casting.solidifier('powah:dielectric_paste', 'minecraft:clay_ball', '15x casting:molten_blaze', 1400).id('caveopolis:casting/solidifier/dielectric_paste')

    event.remove({id: 'powah:crafting/dielectric_paste'})
    event.remove({id: 'powah:crafting/dielectric_paste_2'})

    //Dielectric Rod Horizontal
    event.shaped('6x powah:dielectric_rod', ['ABA', 'ABA', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: 'minecraft:blaze_rod'
    }).id('caveopolis:powah/dielectric_rod')

    event.remove({id: 'powah:crafting/dielectric_rod'})

    //Dielectric Rod Horizontal
    event.shaped('6x powah:dielectric_rod_horizontal', ['AAA', 'BBB', 'AAA'], {
        A: 'powah:dielectric_paste',
        B: 'minecraft:blaze_rod'
    }).id('caveopolis:powah/dielectric_rod_horizontal')

    event.remove({id: 'powah:crafting/dielectric_rod_h'})

    //Uraninite Raw
    event.recipes.powah.energizing('powah:uraninite_raw', 8000, ['#c:ingots/uranium', '#c:gems/fluorite']).id('caveopolis:powah/energizing/uraninite_raw')

    //Block Recipes 
    event.recipes.powah.energizing('2x powah:energized_steel_block', 10000 * 9, ['minecraft:iron_block', 'minecraft:gold_block']).id('caveopolis:powah/energizing/energized_steel_block')
    event.recipes.powah.energizing('1x powah:blazing_crystal_block', 120000 * 9, ['caveopolis:blaze_block']).id('caveopolis:powah/energizing/blazing_crystal_block')
    event.recipes.powah.energizing('1x powah:niotic_crystal_block', 300000 * 9, ['minecraft:diamond_block']).id('caveopolis:powah/energizing/niotic_crystal_block')
    event.recipes.powah.energizing('1x powah:spirited_crystal_block', 1000000 * 9, ['minecraft:emerald_block']).id('caveopolis:powah/energizing/spirited_crystal_block')



})