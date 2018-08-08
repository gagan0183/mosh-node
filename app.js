const http = require('http');

const server = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.write('This is the home page app');
        res.end();
    }
});

server.on('connection', (sot) => {
    console.log('connect');
})

server.listen(9000);
console.log('Server is listening on port 9000');