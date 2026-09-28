//Chisel

ServerEvents.recipes(event => {

    //Smashing Rock
    event.shaped('64x chisel:smashingrock', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:stone',
        B: '#caveopolis:pulverizing_hammers'
    }).id('caveopolis:chisel/smashing_rock')

    event.remove({id: 'chisel:smashingrock'})
})
