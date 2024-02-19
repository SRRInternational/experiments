/* 
listen on the port provided by the first argument

that serves JSON data when it receives a GET request to the path '/api/parsetime' 

Expect the request contain a query string with a key 'iso' and an ISO-format time

JSON response should contain only 'hour', 'minute' and 'second' properties.

 second endpoint for the path '/api/unixtime'

  accepts the same query string but returns UNIX epoch time in milliseconds
*/


const http = require('http');
var port = process.argv[2];
const server = http.createServer(function (req, res) {
var url = require('url').parse(req.url, true)
    if (url.pathname == '/api/parsetime') {
        var date = new Date(url.query.iso);
        var formatDate = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(formatDate))
    }
    if (url.pathname == '/api/unixtime') {
        var date = new Date(url.query.iso);
        var formatDate = {
            unixtime: date.getTime()
        }
        res.end(JSON.stringify(formatDate))
    }

})
server.listen(port, function () {
    console.log('started')
})     
