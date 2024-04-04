//import events modules
const event = require('events')

//creating object from the class EventEmitter inside events class
const eventEmitter = new event.EventEmitter()

eventEmitter.on('onDisplay',()=>{
    //logic
 console.log('inside event');

})

//execution
eventEmitter.emit('onDisplay')