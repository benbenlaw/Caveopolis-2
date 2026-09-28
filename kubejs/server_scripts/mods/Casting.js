//Caveopolis

ServerEvents.recipes(event => {

    //Makeshift Fuel
    event.recipes.casting.fuel('50x caveopolis:makeshift_fuel', 1000).id('caveopolis:fuel/makeshift_fuel')

    //Improvised Lava
    event.recipes.casting.fuel('25x caveopolis:improvised_lava', 1000).id('caveopolis:fuel/improvised_lava')

    //Coins
    event.recipes.casting.solidifier('shops:copper_coin', 'caveopolis:coin_mold', '270x casting:molten_copper', 1000).durationModifier(0.75).id('caveopolis:coin/copper_coin_copper')
    event.recipes.casting.solidifier('shops:copper_coin', 'caveopolis:coin_mold', '90x casting:molten_bronze', 1000).durationModifier(0.5).id('caveopolis:coin/copper_coin_bronze')
    event.recipes.casting.solidifier('shops:copper_coin', 'caveopolis:coin_mold', '90x casting:molten_brass', 1000).durationModifier(0.5).id('caveopolis:coin/copper_coin_brass')

    //Mini Coal
    event.recipes.casting.solidifier('utility:mini_coal', 'casting:nugget_mold', '10x casting:molten_coal', 1000).durationModifier(0.2).id('caveopolis:mini_coal')
    event.recipes.casting.melting('10x casting:molten_coal', 'utility:mini_coal', 1000).durationModifier(0.2).id('caveopolis:mini_coal_melting')

    //Blaze Block
    event.recipes.casting.solidifier('caveopolis:blaze_block', 'casting:block_mold', '1620x casting:molten_blaze', 1400).durationModifier(2.5).id('caveopolis:solidifier/blaze_block')
    event.recipes.casting.melting('810x casting:molten_blaze', 'caveopolis:blaze_block', 1400).durationModifier(2.5).id('caveopolis:melting/blaze_block')

})
