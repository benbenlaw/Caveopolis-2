//Pantry For Blockheads Recipes

ServerEvents.recipes(event => {

    //Artisan Press
    event.shaped('pantryforblockheads:artisan_press', ['AEA', 'ABA', 'DCD'], {
        A: '#minecraft:planks',
        B: 'minecraft:redstone',
        C: '#c:storage_blocks/iron',
        D: 'minecraft:mud_bricks',
        E: 'minecraft:piston'
    }).id('caveopolis:pantryforblockheads/artisan_press')
    
    event.remove({id: 'pantryforblockheads:artisan_press'})


})