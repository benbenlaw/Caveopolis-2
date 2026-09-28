//Easy Villagers and Easy Piglins

ServerEvents.recipes(event => {

    //Barterer
    event.shaped('easy_piglins:barterer', ['AAA', 'ACA', 'BBB'], {
        A: '#c:glass_blocks',
        B: '#c:ingots/netherite',
        C: 'minecraft:iron_block'
    }).id('caveopolis:barterer')

    event.remove({id: 'easy_piglins:barterer'})

})
