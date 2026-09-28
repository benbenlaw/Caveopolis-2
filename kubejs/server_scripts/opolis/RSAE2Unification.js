/*
This is a Global Script for the unification of AE2 and RS2 Storage Components. 
This is to make sure that the player can use either mod for storage and not have to worry about which mod they are using.
This makes use of AE2 mainly to make the RS components use basic AE2 machines like the charger and the inscriber. 
Does not force the player to use one of the other mixes both and uses simple resources from both
Supports Mekanism in the form of Applied Mekananistics and Refined Storage Mekanism Integration when both are available.
*/

const modpack = "caveopolis"


ServerEvents.tags('item', event => {

    const rsMekIntegrationLoaded = Platform.isLoaded("mekanism") && Platform.isLoaded("refinedstorage_mekanism_integration")

    //AE2 and RS Be Friends
    const basicStorageComponents = [
        'refinedstorage:1k_storage_part', 
        'refinedstorage:64b_fluid_storage_part', 
        'ae2:cell_component_1k'
    ]
    if (rsMekIntegrationLoaded) basicStorageComponents.push('refinedstorage_mekanism_integration:64b_chemical_storage_part')
    event.get(`${modpack}:basic_storage_components`).add(basicStorageComponents)

    const advancedStorageComponents = [
        'refinedstorage:4k_storage_part', 
        'refinedstorage:256b_fluid_storage_part', 
        'ae2:cell_component_4k'
    ]
    if (rsMekIntegrationLoaded) advancedStorageComponents.push('refinedstorage_mekanism_integration:256b_chemical_storage_part')
    event.get(`${modpack}:advanced_storage_components`).add(advancedStorageComponents)

    const eliteStorageComponents = [
        'refinedstorage:16k_storage_part', 
        'refinedstorage:1024b_fluid_storage_part', 
        'ae2:cell_component_16k'
    ]
    if (rsMekIntegrationLoaded) eliteStorageComponents.push('refinedstorage_mekanism_integration:1024b_chemical_storage_part')
    event.get(`${modpack}:elite_storage_components`).add(eliteStorageComponents)

    const ultimateStorageComponents = [
        'refinedstorage:64k_storage_part', 
        'refinedstorage:4096b_fluid_storage_part', 
        'ae2:cell_component_64k'
    ]
    if (rsMekIntegrationLoaded) ultimateStorageComponents.push('refinedstorage_mekanism_integration:8192b_chemical_storage_part')
    event.get(`${modpack}:ultimate_storage_components`).add(ultimateStorageComponents)

    event.get(`${modpack}:logic_processors`).add([
        'refinedstorage:basic_processor', 
        'ae2:logic_processor'
    ])
    event.get(`${modpack}:calculation_processors`).add([
        'refinedstorage:improved_processor', 
        'ae2:calculation_processor'
    ])
    event.get(`${modpack}:engineering_processors`).add([
        'refinedstorage:advanced_processor', 
        'ae2:engineering_processor'
    ])

})

ServerEvents.recipes(event => {

    const mekanismLoaded = Platform.isLoaded("mekanism")
    const enderioLoaded = Platform.isLoaded("enderio")
    const alltheoresLoaded = Platform.isLoaded("alltheores")
    const appmekLoaded = mekanismLoaded && Platform.isLoaded("appmek")
    const rsMekIntegrationLoaded = mekanismLoaded && Platform.isLoaded("refinedstorage_mekanism_integration")
    const chemicalStorageLoaded = appmekLoaded && rsMekIntegrationLoaded && alltheoresLoaded

    //Remove Banned Item Recipes
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
    event.remove({id: 'refinedstorage:silicon'})
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})

    if (enderioLoaded) {
        event.remove({id: 'enderio:sag_milling/sand'})
        event.remove({id: 'enderio:sag_milling/clay'})
    }

    event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    event.remove({id: 'refinedstorage:1k_storage_part'})

    event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    event.remove({id: 'refinedstorage:4k_storage_part'})
    event.remove({id: 'refinedstorage:64k_storage_part'})
    event.remove({id: 'refinedstorage:16k_storage_part'})
    event.remove({id: 'refinedstorage:64b_fluid_storage_part'})
    event.remove({id: 'refinedstorage:256b_fluid_storage_part'})
    event.remove({id: 'refinedstorage:1024b_fluid_storage_part'})
    event.remove({id: 'refinedstorage:4096b_fluid_storage_part'})

    if (chemicalStorageLoaded) {
        event.remove({id: 'refinedstorage_mekanism_integration:64b_chemical_storage_part'})
        event.remove({id: 'refinedstorage_mekanism_integration:256b_chemical_storage_part'})
        event.remove({id: 'refinedstorage_mekanism_integration:1024b_chemical_storage_part'})
        event.remove({id: 'refinedstorage_mekanism_integration:8192b_chemical_storage_part'})
    }

    //Disks and Drives
    createDriveRecipes(`#${modpack}:basic_storage_components`, 
        'ae2:item_storage_cell_1k', 'refinedstorage:1k_storage_disk', 'refinedstorage:1k_storage_block',
        'ae2:fluid_storage_cell_1k', 'refinedstorage:64b_fluid_storage_disk', 'refinedstorage:64b_fluid_storage_block',
        'appmek:chemical_storage_cell_1k', 'refinedstorage_mekanism_integration:64b_chemical_storage_disk', 'refinedstorage_mekanism_integration:64b_chemical_storage_block'
    )

    createDriveRecipes(`#${modpack}:advanced_storage_components`,
        'ae2:item_storage_cell_4k', 'refinedstorage:4k_storage_disk', 'refinedstorage:4k_storage_block',
        'ae2:fluid_storage_cell_4k', 'refinedstorage:256b_fluid_storage_disk', 'refinedstorage:256b_fluid_storage_block',
        'appmek:chemical_storage_cell_4k', 'refinedstorage_mekanism_integration:256b_chemical_storage_disk', 'refinedstorage_mekanism_integration:256b_chemical_storage_block'
    )

    createDriveRecipes(`#${modpack}:elite_storage_components`,
        'ae2:item_storage_cell_16k', 'refinedstorage:16k_storage_disk', 'refinedstorage:16k_storage_block', 
        'ae2:fluid_storage_cell_16k', 'refinedstorage:1024b_fluid_storage_disk', 'refinedstorage:1024b_fluid_storage_block',
        'appmek:chemical_storage_cell_16k', 'refinedstorage_mekanism_integration:1024b_chemical_storage_disk', 'refinedstorage_mekanism_integration:1024b_chemical_storage_block'
    )

    createDriveRecipes(`#${modpack}:ultimate_storage_components`,
        'ae2:item_storage_cell_64k', 'refinedstorage:64k_storage_disk', 'refinedstorage:64k_storage_block',
        'ae2:fluid_storage_cell_64k', 'refinedstorage:4096b_fluid_storage_disk', 'refinedstorage:4096b_fluid_storage_block',
        'appmek:chemical_storage_cell_64k', 'refinedstorage_mekanism_integration:8192b_chemical_storage_disk', 'refinedstorage_mekanism_integration:8192b_chemical_storage_block'
    )
        
    //Final AE2 Drives 
    event.shaped('ae2:item_storage_cell_256k', ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: 'ae2:cell_component_256k',
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id(`${modpack}:item_storage_cell_256k`)
    event.remove({id: 'ae2:network/cells/item_storage_cell_256k'})

    event.shaped('ae2:fluid_storage_cell_256k', ['ADA', 'DBD', 'CEC'], {
            A: '#c:glass_blocks',
            B: 'ae2:cell_component_256k',
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`${modpack}:fluid_storage_cell_256k`)
    event.remove({id: 'ae2:network/cells/fluid_storage_cell_256k'})

    if (chemicalStorageLoaded) {
        event.shaped('appmek:chemical_storage_cell_256k', ['ADA', 'DBD', 'CCC'], {
                A: '#c:glass_blocks',
                B: 'ae2:cell_component_256k',
                C: 'alltheores:osmium_ingot',
                D: 'minecraft:redstone',
            }).id(`${modpack}:chemical_storage_cell_256k`)
        event.remove({id: 'ae2:network/cells/chemical_storage_cell_256k'})
    }

    function createDriveRecipes(storage, 
        ae2IdItem, rsIdItem, rsIdItemBlock, 
        ae2IdFluid, rsIdFluid, rsIdFluidBlock, 
        ae2IdChemical, rsIdChemical, rsIdChemicalBlock) {
        
        event.shaped(ae2IdItem, ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id(`${modpack}:${ae2IdItem.split(':')[1]}`)
        event.remove({id: `ae2:network/cells/${ae2IdItem.split(':')[1]}`})

        event.shaped(ae2IdFluid, ['ADA', 'DBD', 'CEC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`${modpack}:${ae2IdFluid.split(':')[1]}`)
        event.remove({id: `ae2:network/cells/${ae2IdFluid.split(':')[1]}`})

        event.shaped(rsIdItem, ['DDD', 'ABA', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id(`${modpack}:${rsIdItem.split(':')[1]}`)
        event.remove({id: rsIdItem})
        event.remove({id: `refinedstorage:${rsIdItem.split(':')[1]}_from_storage_housing`})

        event.shaped(rsIdItemBlock, ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: storage,
            C: 'refinedstorage:machine_casing',
            D: 'minecraft:redstone'
        }).id(`${modpack}:${rsIdItemBlock.split(':')[1]}`)
        event.remove({id: rsIdItemBlock})
        
        event.shaped(rsIdFluid, ['DDD', 'ABA', 'CEC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`${modpack}:${rsIdFluid.split(':')[1]}`)
        event.remove({id: rsIdFluid})
        event.remove({id: `refinedstorage:${rsIdFluid.split(':')[1]}_from_storage_housing`})

        event.shaped(rsIdFluidBlock, ['ABA', 'ECE', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: storage,
            C: 'refinedstorage:machine_casing',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`${modpack}:${rsIdFluidBlock.split(':')[1]}`)
        event.remove({id: rsIdFluidBlock})

        // Chemical (Mekanism) storage components - only registered if AE2, RS,
        // Mekanism, their respective integration addons, and AllTheOres are all loaded
        if (chemicalStorageLoaded) {
            event.shaped(ae2IdChemical, ['ADA', 'DBD', 'CCC'], {
                A: '#c:glass_blocks',
                B: storage,
                C: 'alltheores:osmium_ingot',
                D: 'minecraft:redstone',
            }).id(`${modpack}:${ae2IdChemical.split(':')[1]}`)
            event.remove({id: `ae2:network/cells/${ae2IdChemical.split(':')[1]}`})

            event.shaped(rsIdChemical, ['DDD', 'ABA', 'CCC'], {
                A: '#c:glass_blocks',
                B: storage,
                C: 'alltheores:osmium_ingot',
                D: 'minecraft:redstone',
            }).id(`${modpack}:${rsIdChemical.split(':')[1]}`)
            event.remove({id: rsIdChemical})
            event.remove({id: `refinedstorage_mekanism_integration:${rsIdChemical.split(':')[1]}_from_storage_housing`})

            event.shaped(rsIdChemicalBlock, ['ABA', 'ECE', 'ADA'], {
                A: 'alltheores:osmium_ingot',
                B: storage,
                C: 'refinedstorage:machine_casing',
                D: 'minecraft:redstone',
                E: 'alltheores:osmium_ingot'
            }).id(`${modpack}:${rsIdChemicalBlock.split(':')[1]}`)
            event.remove({id: rsIdChemicalBlock})
        }
    }

    //Recipes used for the storage components, these can be tweaked to globally change the recipes for both mods. We use AE2 again as the base for components

    //Basic Storage Component
    event.shaped('ae2:cell_component_1k', ['ADA', 'BCB', 'ABA'], {
        A: '#c:silicon',
        B: '#c:glass_blocks',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id(`${modpack}:cell_component_1k`)

    //Advanced Storage Component
    event.shaped('ae2:cell_component_4k', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:redstone',
        B: 'ae2:cell_component_1k',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id(`${modpack}:cell_component_4k`)

    //Elite Storage Component
    event.shaped('ae2:cell_component_16k', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:glowstone_dust',
        B: 'ae2:cell_component_4k',
        C: 'ae2:engineering_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id(`${modpack}:cell_component_16k`)

    //Ultimate Storage Component
    event.shaped('ae2:cell_component_64k', ['ADA', 'BCB', 'ABA'], {
        A: 'alltheores:uranium_ingot',
        B: 'ae2:cell_component_16k',
        C: 'ae2:engineering_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id(`${modpack}:cell_component_64k`)


})