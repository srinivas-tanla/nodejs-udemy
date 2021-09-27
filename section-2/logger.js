const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('messageLogged',{msg:message});
    }
}

module.exports = Logger;