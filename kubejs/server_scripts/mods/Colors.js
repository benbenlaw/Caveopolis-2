//Colors

ServerEvents.recipes(event => {

    //Removed Colored Stone 
    colors.forEach(color => {
        event.remove({id: `colors:stonecutting/${color}_stone_from_stone`})
    })

    //Crafting Tables
    colors.forEach(color => {
        event.shaped(`4x colors:${color}_chest`, ['AAA', 'A A', 'AAA'], {
            A: `colors:${color}_log`
        }).id(`caveopolis:${color}_chest`)
    })

})
