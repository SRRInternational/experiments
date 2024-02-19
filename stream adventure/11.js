/* const http = require('http')
const server = http.createServer(function (req, res) { */
    const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)

// not working with push becs push implement a readable stream 
stream.write('hello\n')
stream.pipe(process.stdout)/* 
});
server.listen(8099) */