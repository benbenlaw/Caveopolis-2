//In World Recipes

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({mod: 'routers'}, 'minecraft:iron_ingot', '#c:ingots/brass')

    //Sonar Cannons, these are visual recipes based on the ServerEvents.js functions
    sonarCannon('caveopolis:bedrock_shard', 'caveopolis:sonar_cannon', 'minecraft:bedrock')
    sonarCannon('caveopolis:bedrock_shard', 'caveopolis:improved_sonar_cannon', 'minecraft:bedrock')
    sonarCannonEmpty('caveopolis:improved_sonar_cannon', 'caveopolis:toprock')

    //Geores
    rightClickBlockTransform('geore:budding_coal', 'caveopolis:black_shimmer_crystal', 'caveopolis:black_shimmer_stone')
    rightClickBlockTransform('geore:budding_zinc', 'caveopolis:gray_shimmer_crystal', 'caveopolis:gray_shimmer_stone')
    rightClickBlockTransform('geore:budding_iron', 'caveopolis:light_gray_shimmer_crystal', 'caveopolis:light_gray_shimmer_stone')
    rightClickBlockTransform('geore:budding_diamond', 'caveopolis:light_blue_shimmer_crystal', 'caveopolis:light_blue_shimmer_stone')
    rightClickBlockTransform('geore:budding_nickel', 'caveopolis:brown_shimmer_crystal', 'caveopolis:brown_shimmer_stone')
    rightClickBlockTransform('geore:budding_aluminum', 'caveopolis:cyan_shimmer_crystal', 'caveopolis:cyan_shimmer_stone')
    rightClickBlockTransform('geore:budding_ancient_debris', 'caveopolis:magenta_shimmer_crystal', 'caveopolis:magenta_shimmer_stone')
    rightClickBlockTransform('geore:budding_osmium', 'caveopolis:white_shimmer_crystal', 'caveopolis:white_shimmer_stone')
    rightClickBlockTransform('geore:budding_lead', 'caveopolis:lime_shimmer_crystal', 'caveopolis:lime_shimmer_stone')
    rightClickBlockTransform('geore:budding_copper', 'caveopolis:orange_shimmer_crystal', 'caveopolis:orange_shimmer_stone')
    rightClickBlockTransform('geore:budding_gold', 'caveopolis:yellow_shimmer_crystal', 'caveopolis:yellow_shimmer_stone')
    rightClickBlockTransform('geore:budding_uranium', 'caveopolis:green_shimmer_crystal', 'caveopolis:green_shimmer_stone')
    rightClickBlockTransform('geore:budding_redstone', 'caveopolis:red_shimmer_crystal', 'caveopolis:red_shimmer_stone')
    rightClickBlockTransform('geore:budding_lapis', 'caveopolis:blue_shimmer_crystal', 'caveopolis:blue_shimmer_stone')
    rightClickBlockTransform('geore:budding_emerald', 'caveopolis:pink_shimmer_crystal', 'caveopolis:pink_shimmer_stone')
    rightClickBlockTransform('minecraft:budding_amethyst', 'caveopolis:purple_shimmer_crystal', 'caveopolis:purple_shimmer_stone')

    rightClickBlockTransform('geore:budding_platinum', 'caveopolis:white_shimmer_crystal', 'geore:budding_lead')
    rightClickBlockTransform('geore:budding_tin', 'caveopolis:white_shimmer_crystal', 'geore:budding_copper')
    rightClickBlockTransform('geore:budding_silver', 'caveopolis:white_shimmer_crystal', 'geore:budding_gold')
    rightClickBlockTransform('geore:budding_uraninite', 'caveopolis:lime_shimmer_crystal', 'geore:budding_uranium')
    rightClickBlockTransform('geore:budding_ruby', 'caveopolis:red_shimmer_crystal', 'geore:budding_redstone')
    rightClickBlockTransform('geore:budding_sapphire', 'caveopolis:blue_shimmer_crystal', 'geore:budding_lapis')
    //rightClickBlockTransform('geore:budding_peridot', 'caveopolis:green_shimmer_crystal', 'geore:budding_emerald') awaiting peridot from Geore
    rightClickBlockTransform('geore:budding_quartz', 'caveopolis:blue_shimmer_crystal', 'minecraft:budding_amethyst') 

    //Shimmer Stone
    colors.forEach(color => {
        rightClickBlockTransform('minecraft:air', 'strainers:eroding_drop', `caveopolis:${color}_shimmer_stone`)
    })

    //Right Click on Block to transform block
    function rightClickBlockTransform(outputBlock, heldItem, blockClicked) {
        event.custom({
            "type": "inworldrecipes:world_recipe",
            "triggers": [
                {
                "type": "inworldrecipes:click_type",
                "click_type": "right_click"
                },
                {
                "type": "inworldrecipes:block_target",
                "target_block": {
                    "Name": blockClicked
                    }
                }
            ],
            "conditions": [
                {
                "type": "inworldrecipes:held_item",
                "ingredient": {
                    "ingredient": heldItem,
                    "count": 1
                    }
                }
            ],
            "results": [
                {
                "type": "inworldrecipes:block_state",
                "block_state": {
                    "Name": outputBlock
                    }
                },
                {
                    "type": "inworldrecipes:consume_held_item"
                }
            ]
        }).id(`caveopolis:inworldrecipes/right_click_block_transform/${outputBlock.split(':')[1]}_using_${heldItem.split(':')[1]}_on_${blockClicked.split(':')[1]}`)
    }



    //Sonar 
    function sonarCannon(result, heldItem, blockClicked) {
        event.custom({
            "type": "inworldrecipes:world_recipe",
            "triggers": [
                {
                "type": "inworldrecipes:click_type",
                "click_type": "right_click"
                },
                {
                "type": "inworldrecipes:block_target",
                "target_block": {
                    "Name": blockClicked
                    }
                }
            ],
            "conditions": [
                {
                "type": "inworldrecipes:held_item",
                "ingredient": {
                    "ingredient": heldItem,
                    "count": 1
                    }
                }
            ],
            "results": [
                {
                    "type": "inworldrecipes:chance_results",
                    "add_to_inventory": true,
                    "results": [
                        {
                        "item": {
                            "id": result
                            }
                        }
                    ]
                }
            ],
            "options": [
                {
                    "show_in_jei": true,
                    "only_visual_recipe": true
                }
            ]
        }).id(`caveopolis:inworldrecipes/sonar_cannon/${result.split(':')[1]}_from_${heldItem.split(':')[1]}`)
    }

    //Sonar 
    function sonarCannonEmpty(heldItem, blockClicked) {
        event.custom({
            "type": "inworldrecipes:world_recipe",
            "triggers": [
                {
                "type": "inworldrecipes:click_type",
                "click_type": "right_click"
                },
                {
                "type": "inworldrecipes:block_target",
                "target_block": {
                    "Name": blockClicked
                    }
                }
            ],
            "conditions": [
                {
                "type": "inworldrecipes:held_item",
                "ingredient": {
                    "ingredient": heldItem,
                    "count": 1
                    }
                }
            ],
            "results": [

            ],
            "options": [
                {
                    "show_in_jei": true,
                    "only_visual_recipe": true
                }
            ]
        }).id(`caveopolis:inworldrecipes/sonar_cannon/${heldItem.split(':')[1]}`)
    }

});