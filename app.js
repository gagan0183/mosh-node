const Logger = require('./logger');

var logger = new Logger();

logger.on('logMessage', function(arg) {
    console.log('Message is there ', arg);
});

logger.log('That is app');