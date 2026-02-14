const http = require('http');

const server = http.createServer()

server.on('request', (req, res)=> {
    console.log('Welocome')
})

server.listen(5000)