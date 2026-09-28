//Classic Pipes

ServerEvents.recipes(event => {

    //Replace Honeycomb
    event.replaceInput({mod: "classicpipes"}, 'minecraft:honeycomb', 'alltheores:zinc_ingot')
    event.replaceInput({mod: "classicpipes"}, 'minecraft:redstone_torch', ['minecraft:lever', 'minecraft:redstone_torch'])
})
