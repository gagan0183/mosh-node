const http = require('http');

const server = http.createServer();

server.on('connection', (sot) => {
    console.log('connect');
})

server.listen(9000);
console.log('Server is listening on port 9000');