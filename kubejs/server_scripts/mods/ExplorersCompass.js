//Explorer's Compass

ServerEvents.recipes(event => {

    //Explorer's Compass 
    event.shaped('explorerscompass:explorerscompass', ['ABA', 'BCB', 'ABA'], {
        A: '#c:ingots/bronze',
        B: 'minecraft:cracked_stone_bricks',
        C: '#c:ingots/zinc'
    }).id('caveopolis:explorers_compass')

    event.remove({id: 'explorerscompass:explorers_compass'})

})