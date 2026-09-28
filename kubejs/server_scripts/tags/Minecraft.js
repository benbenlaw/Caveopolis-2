//Minecraft Tags

ServerEvents.tags('block', event => {

    event.add('minecraft:mineable/pickaxe', 'minecraft:crafting_table')
    event.remove('minecraft:mineable/axe', 'minecraft:crafting_table')
    event.remove('minecraft:mineable/axe', 'minecraft:crafting_table')

    colors.forEach(color => {
        event.add('minecraft:overworld_carver_replaceables', `colors:${color}_stone`)
    })


})

ServerEvents.tags('item', event => {

    event.add('minecraft:mineable/pickaxe', 'minecraft:crafting_table')
    event.remove('minecraft:mineable/axe', 'minecraft:crafting_table')



})