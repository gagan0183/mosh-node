//use const to import modules as we wont be able to change the value for that
const fs = require('fs');
const EventEmitter = require('events');
const logger = require('./logger');
const os = require('os');
const path = require('path');

global.console.log(logger);

console.log(__dirname);
console.log(__filename);

var pathp = path.parse(__filename);

console.log(pathp);

//logger = 1;

//call a function on an object
//logger.log('pppp');

//call a function
logger('ppppp');

//global
//console.log(global);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`total memory is ${totalMemory}`);
console.log(`free memory is ${freeMemory}`);

var files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', (err, files) => {
    if(err) console.log(err);
    else console.log(files);
});

var event = new EventEmitter();

event.on('ppp', function(arg) {
    console.log('event is captured', arg);
});

event.emit('ppp', {
    ppp : 90000
});
