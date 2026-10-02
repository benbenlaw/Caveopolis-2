//Ender IO

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'enderio:sag_milling/cobbled_deepslate'})

    //Entro Dust
    event.recipes.enderio.sag_milling([['extendedae:entro_dust']], 'extendedae:entro_crystal', 2000).id('caveopolis:enderio/sag_milling/entro_dust')
    event.recipes.enderio.sag_milling([['ae2:fluix_dust']], 'ae2:fluix_crystal', 2000).id('caveopolis:enderio/sag_milling/fluix_dust')
    event.recipes.enderio.sag_milling([['ae2:certus_quartz_dust']], 'ae2:certus_quartz_crystal', 2000).id('caveopolis:enderio/sag_milling/certus_dust')
    event.recipes.enderio.sag_milling([['ae2:sky_dust']], 'ae2:sky_stone_block', 2000).id('caveopolis:enderio/sag_milling/sky_stone_block')
    event.recipes.enderio.sag_milling([['ae2:ender_dust']], 'minecraft:ender_pearl', 2000).id('caveopolis:enderio/sag_milling/ender_dust')
    event.recipes.enderio.sag_milling([['advanced_ae:quantum_infused_dust']], 'advanced_ae:shattered_singularity', 2000).id('caveopolis:enderio/sag_milling/quantum_infused_dust')

    //Replace Input
    event.replaceInput({id: 'enderio:ensouled_chassis'}, 'minecraft:quartz', 'enderio:void_chassis')

    //Void Chassis
    event.shaped('enderio:void_chassis', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/electrum',
        B: 'enderio:grains_of_infinity',
        C: 'ae2:quantum_entangled_singularity'
    }).id('caveopolis:enderio/void_chassis')

    event.remove({id: 'enderio:void_chassis'})

    //Grains of Infinity
    event.recipes.enderio.fire_crafting([['enderio:grains_of_infinity'], ['ae2:sky_dust', 1, 2, 0.25], ['enderio:suspicious_seed', 1, 1, 0.1]], ['minecraft:overworld', 'caveopolis:caves'])
        .baseBlocks('caveopolis:matter_block').blockAfterBurning('compressium:cobblestone_3').id('caveopolis:enderio/fire_crafting/grains_of_infinity')

    event.remove({id: 'enderio:fire_crafting/deepslate_infinity'})
    event.remove({id: 'enderio:fire_crafting/bedrock_infinity'})
    





})