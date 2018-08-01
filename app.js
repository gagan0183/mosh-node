//use const to import modules as we wont be able to change the value for that
const logger = require('./logger');

global.console.log(logger);

console.log(__dirname);
console.log(__filename);

//logger = 1;

//call a function on an object
//logger.log('pppp');

//call a function
logger('ppppp');

//global
//console.log(global);