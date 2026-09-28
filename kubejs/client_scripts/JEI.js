//JEI Recipe Viewer

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('#caveopolis:banned_items')
})

/*
RecipeViewerEvents.addEntries('item', event => {
    event.add('strainers:purifying_water_bucket')
    event.add('strainers:eroding_water_bucket')
})
*/

