//Pipe Connector

ServerEvents.recipes(event => {

    //Pipe Connector
    event.shaped('pipe_connector:pipe_connector', ['ABA', 'ACA', 'ABA'], {
        A: '#c:ingots/copper',
        B: '#c:ingots/tin',
        C: '#pipe_connector:placeable_items'
    }).id('caveopolis:pipe_connector/pipe_connector')
    
    event.remove({id: 'pipe_connector:pipe_connector'})

})