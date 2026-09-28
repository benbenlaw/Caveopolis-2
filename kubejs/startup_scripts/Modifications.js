//Block Modifications

BlockEvents.modification(event => {
    event.modify('minecraft:stone', block => {
        block.requiresTool = false
    })

    event.modify('minecraft:crafting_table', block => {
        block.requiresTool = true
        block.soundType = 'stone'
    })
})

//Item Modifications

ItemEvents.modification(event => {

    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })

    event.modify('minecraft:snowball', item => {
        item.maxStackSize = 64
    })

    event.modify('cookingforblockheads:ice_cubes', item => {
        item.maxStackSize = 64
    })

    //TEMP - KubeJS setting durability on a custom tool does not work so have to do this 

    event.modify('caveopolis:stone_hammer', item => {
        item.maxDamage = 131
    })

    event.modify('caveopolis:copper_hammer', item => {
        item.maxDamage = 190
    })

    event.modify('caveopolis:iron_hammer', item => {
        item.maxDamage = 250
    })

    event.modify('caveopolis:diamond_hammer', item => {
        item.maxDamage = 1561
    })

    event.modify('caveopolis:netherite_hammer', item => {
        item.maxDamage = 2031
    })

    event.modify('caveopolis:excavating_stone_hammer', item => {
        item.maxDamage = 655
    })

    event.modify('caveopolis:excavating_copper_hammer', item => {
        item.maxDamage = 950
    })

    event.modify('caveopolis:excavating_iron_hammer', item => {
        item.maxDamage = 1250
    })

    event.modify('caveopolis:excavating_diamond_hammer', item => {
        item.maxDamage = 7805
    })

    event.modify('caveopolis:excavating_netherite_hammer', item => {
        item.maxDamage = 10155
    })


})

