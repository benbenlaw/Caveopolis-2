/*
This is a Global Script for the unification of recipes that hard code certain things like crafting tables instead of using the tag
*/

ServerEvents.recipes(event => {
    
    //Replace Inputs
    event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')
    event.replaceInput({}, 'minecraft:chest', '#c:chests/wooden')
    event.replaceInput({}, 'minecraft:stick', '#c:rods/wooden')
    event.replaceInput({}, 'refinedstorage:silicon', '#c:silicon')
    event.replaceInput({}, 'ae2:silicon', '#c:silicon')
    event.replaceInput({}, 'enderio:silicon', '#c:silicon')
    event.replaceOutput({}, 'enderio:silicon', 'ae2:silicon')

    event.shapeless('ae2:silicon', ['refinedstorage:silicon'])
    event.shapeless('ae2:silicon', ['enderio:silicon'])

})

ServerEvents.tags('item', event => {

    //Remove charged certus from certus tag, fixes casting 
    event.get('c:gems/certus_quartz').remove('ae2:charged_certus_quartz_crystal')
    event.get('c:silicon').remove(['refinedstorage:silicon', 'enderio:silicon'])

})