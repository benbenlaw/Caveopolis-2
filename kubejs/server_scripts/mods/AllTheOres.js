//All The Ores

ServerEvents.recipes(event => {

    //Remove
    event.remove({input: '#alltheores:ore_hammers'})
    event.remove({output: '#c:gears', type: 'minecraft:crafting_shaped'})

})