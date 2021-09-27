const EventEmitter = require('events');
// events module
const emitter = new EventEmitter();

// register an event has to be before rasing an event
emitter.on('messageLogged',(payload)=>{
    console.log("Listener called");
    console.log(payload);
});

emitter.on('logging',(eventArgs)=>{
    console.log(eventArgs);
})

// raise an event
emitter.emit('messageLogged',{id:1,url:"https://localhost:3000"});

// raise an event logging, send a message along with event
emitter.emit('logging',{id:1,message:"This is from logging event message"})

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',(message)=>{
    console.log('event listener ',message);
})

logger.log('Graphana reports finished');


