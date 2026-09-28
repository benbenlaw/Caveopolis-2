StartupEvents.registry('block', event => {

  //Shimmering Stone
  colors.forEach(color => {
    event.create(`caveopolis:${color}_shimmer_stone`)
      .hardness(-1.0)
      .resistance(2000)
      .soundType('stone')
      .lightLevel(0.5)
      .fullBlock(true);
  })

  //Toprock 
  event.create(`caveopolis:toprock`)
    .hardness(-1.0)
    .resistance(2000)
    .soundType('stone')
    .fullBlock(true);

  //Crystal Stone
  event.create('caveopolis:crystal_stone')
    .hardness(2.0)
    .soundType('stone')
    .lightLevel(0.7)
    .fullBlock(true)

  //Base Crux
  event.create('caveopolis:base_crux')
    .hardness(2.0)
    .soundType('metal')
    .tag('minecraft:mineable/pickaxe')

  //Elemental Crux
  event.create('caveopolis:elemental_crux')
    .hardness(2.0)
    .soundType('metal')
    .tag('minecraft:mineable/pickaxe')

  //Life Infused Moss
  event.create('caveopolis:life_infused_moss')
    .hardness(2.0)
    .soundType('gravel')
    .tag('minecraft:mineable/shovel')

  //Matter Block
  event.create('caveopolis:matter_block')
    .hardness(2.0)
    .soundType('metal')
    .tag('minecraft:mineable/pickaxe')

  //Black Gold Block
  event.create('caveopolis:black_gold_block')
    .hardness(2.0)
    .soundType('metal')
    .tag('minecraft:mineable/pickaxe')

  //Enhanced Crystaltine Block
  event.create('caveopolis:enhanced_crystaltine_block')
    .hardness(2.0)
    .soundType('metal')
    .tag('minecraft:mineable/pickaxe')

  //Speedy Ladder
  event.create('caveopolis:speedy_ladder')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'modpackutils:climbable_blocks'])

  //Blaze Block
  event.create('caveopolis:blaze_block')
    .hardness(2.0)
    .soundType('metal')
    .tag(['minecraft:mineable/pickaxe', 'c:storage_blocks/blaze_rod'])

  //Trader Huts
  event.create('caveopolis:trader_hut_light_gray_house')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'shops:shop_trader_blocks'])

  event.create('caveopolis:trader_hut_kitchen')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'shops:shop_trader_blocks'])

  event.create('caveopolis:trader_hut_farmer')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'shops:shop_trader_blocks'])

  event.create('caveopolis:trader_hut_mesh')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'shops:shop_trader_blocks'])

  event.create('caveopolis:trader_hut_explorer')
    .hardness(2.0)
    .soundType('wood')
    .tag(['minecraft:mineable/axe', 'shops:shop_trader_blocks'])

})
