//Refined Storage

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'refinedstorage:silicon'})
    event.remove({id: 'refinedstorage:quartz_enriched_iron'})
    event.remove({id: 'refinedstorage:quartz_enriched_copper'})

    //Creative Conbtroller
        event.shaped('refinedstorage:creative_controller', ['AAA', 'BCB', 'AAA'], {
        A: 'caveopolis:the_creative_ingot',
        B: '#refinedstorage:controllers',
        C: 'powah:energy_cell_creative'
    }).id('caveopolis:creative_controller')

    //Creative Range Upgrade
    event.shaped('refinedstorage:creative_range_upgrade', ['ABA', 'BCB', 'DDD'], {
        A: 'minecraft:ender_eye',
        B: 'refinedstorage:range_upgrade',
        C: 'minecraft:nether_star',
        D: 'minecraft:netherite_ingot'
    }).id('caveopolis:creative_range_upgrade')
})