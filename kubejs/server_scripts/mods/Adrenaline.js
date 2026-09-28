//Applied Energistics

ServerEvents.recipes(event => {

    //Adrenaline Shot
    event.shaped('3x adrenaline:adrenaline_shot', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:mystical_fertilizer',
        B: 'minecraft:bone_meal',
        C: 'minecraft:glass_bottle'
    }).id('caveopolis:adrenaline/adrenaline_shot')

    event.remove({id: 'adrenaline:adrenaline_shot'})

})