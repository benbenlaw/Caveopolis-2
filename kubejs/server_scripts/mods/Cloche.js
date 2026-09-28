//Cloche

ServerEvents.recipes(event => {

    //Replace Iron with Aluminum
    event.replaceInput({mod: 'cloche'}, 'minecraft:iron_ingot', 'alltheores:aluminum_ingot')

    //Torchflower
    event.recipes.cloche.cloche(['minecraft:torchflower'], 'minecraft:torchflower_seeds', '#minecraft:dirt', 6000).id('caveopolis:cloche/torchflower')

    //Pitcher Plant
    event.recipes.cloche.cloche(['minecraft:pitcher_plant'], 'minecraft:pitcher_pod', '#minecraft:dirt', 3000).id('caveopolis:cloche/pitcher_plant')

    //No Seeds Upgrade
    event.shaped('cloche:no_seeds_upgrade', [' A ', 'ABA', ' A '], {
        A: '#c:seeds',
        B: 'alltheores:aluminum_ingot'
    }).id('caveopolis:cloche/no_seeds_upgrade')

    //Cloche
    event.shaped('cloche:cloche', ['AAA', 'BCB', 'AAA'], {
        A: 'alltheores:aluminum_ingot',
        B: ['ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]'],
        C: 'strainers:purified_dirt'
    }).consumeIngredient("ceramicbucket:ceramic_bucket").id('caveopolis:cloche_ceramic_bucket')

    event.shaped('cloche:cloche', ['AAA', 'BCB', 'AAA'], {
        A: 'alltheores:aluminum_ingot',
        B: ['minecraft:water_bucket'],
        C: 'strainers:purified_dirt'
    }).consumeIngredient("minecraft:water_bucket").id('caveopolis:cloche_water_bucket')

    event.remove({id: 'cloche:cloche'})

    //Pantry For Blockheads
    addCloche('minecraft:oak_log', 'pantryforblockheads:peach_sapling', 'pantryforblockheads:peach', 'pantryforblockheads:peach_leaves')
    addCloche('minecraft:oak_log', 'pantryforblockheads:lemon_sapling', 'pantryforblockheads:lemon', 'pantryforblockheads:lemon_leaves')

    //Colored Saplings in Cloche
    colors.forEach(color => {
        addCloche(`colors:${color}_log`, `colors:${color}_sapling`, `colors:${color}_apple`, `colors:${color}_leaves`)
    })

    ///Cloche
    function addCloche(log, sapling, apple, leaves) {
        event.recipes.cloche.cloche(
            [[`2x ${log}`], [sapling, 0.2], [apple, 0.2], ["minecraft:stick", 0.1]],
            sapling,
            "#minecraft:dirt",
            1200
        ).shearsResult(`2x ${leaves}`).id(`caveopolis:cloche/${sapling.split(':')[1]}`)
    }

})
