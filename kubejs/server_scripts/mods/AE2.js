//Applied Energistics

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'ae2:network/blocks/crank'}, 'minecraft:copper_ingot', 'alltheores:osmium_ingot')
    event.replaceInput({id: 'ae2:network/crystal_resonance_generator'}, 'ae2:charged_certus_quartz_crystal', 'minecraft:prismarine_crystals')
    event.replaceInput({id: 'ae2:network/blocks/io_condenser'}, 'ae2:fluix_dust', 'alltheores:electrum_block')

    //Silicon
    event.blasting('ae2:silicon', 'extendedae:quartz_blend').id('caveopolis:smelting/silicon')

    //Silicon Processor
    event.recipes.ae2.inscriber('ae2:silicon_press', ['extendedae:silicon_block'], "press").id('caveopolis:ae2/inscriber/silicon_press')

    //Logic Processor
    event.recipes.ae2.inscriber('ae2:logic_processor_press', ['minecraft:gold_block'], "press").id('caveopolis:ae2/inscriber/logic_press')

    //Calculation Processor
    event.recipes.ae2.inscriber('ae2:calculation_processor_press', ['ae2:quartz_block'], "press").id('caveopolis:ae2/inscriber/calculation_press')

    //Engineering Processor
    event.recipes.ae2.inscriber('ae2:engineering_processor_press', ['minecraft:diamond_block'], "press").id('caveopolis:ae2/inscriber/engineering_press')

    //Charged Lapis
    event.recipes.ae2.charger("caveopolis:charged_lapis", "minecraft:lapis_lazuli").id('caveopolis:ae2/charger/charged_lapis')

    //Charger
    event.shaped('ae2:charger', ['AAA', 'AB ', 'AAA'], {
        A: '#c:ingots/osmium',
        B: 'minecraft:lapis_lazuli'
    }).id('caveopolis:charger')

    event.remove({id: 'ae2:network/blocks/crystal_processing_charger'})

    //Inscriber
    event.shaped('ae2:inscriber', ['ABA', 'CBC', 'ABA'], {
        A: '#c:ingots/osmium',
        B: 'minecraft:piston',
        C: 'ae2:charged_certus_quartz_crystal'
    }).id('caveopolis:inscriber')

    event.remove({id: 'ae2:network/blocks/inscribers'})

})