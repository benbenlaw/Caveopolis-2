//Extended AE

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'extendedae:quartz_blend_alt'})
    event.remove({id: 'extendedae:quartz_blend_normal'})
    event.remove({id: 'extendedae:blasting/quartz_blend'})
    event.remove({id: 'extendedae:smelting/quartz_blend'})

    //Quartz Blend
    event.shaped('9x extendedae:quartz_blend', ['ABA', 'BCB', 'ABA'], {
        A: 'strainers:sand_dust',
        B: 'ae2:certus_quartz_dust',
        C: '#c:dusts/salt'
    }).id('caveopolis:quartz_blend')



})