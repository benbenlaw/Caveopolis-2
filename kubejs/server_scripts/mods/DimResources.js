//Dim Resources

ServerEvents.recipes(event => {

    //Interdimensional Laser
    event.shaped('dimresources:laser', ['ADA', 'BCB', 'AAA'], {
        A: '#c:ingots/omnithium',
        B: 'dimresources:dimensional_stone_bricks',
        C: 'enderio:ensouled_chassis',
        D: 'minecraft:beacon'
    }).id('caveopolis:dimresources/interdimensional_laser')

    event.remove({id: 'dimresources:laser'})
})