const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('logMessage', {
            p: 'p'
        });
    }
}
module.exports = Logger;