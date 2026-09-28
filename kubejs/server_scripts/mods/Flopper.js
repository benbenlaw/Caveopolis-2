//Flopper

ServerEvents.recipes(event => {

    //Crafting Table
    event.shaped('flopper:flopper', [' AA', 'ABA', ' A '], {
        A: '#c:ingots/zinc',
        B: 'ceramicbucket:ceramic_bucket'
    }).id('caveopolis:flopper')
    
    event.remove({id: 'flopper:flopper'})


})
