//Construction Sticks

ServerEvents.recipes(event => {

    //Wooden Stick, now Stone Stick
    event.shaped('constructionstick:wooden_stick', ['  A', ' A ', 'A  '], {
        A: 'caveopolis:stone_rod'
    }).id('caveopolis:stone_stick')

    event.remove({id: 'constructionstick:wooden_stick'})

})