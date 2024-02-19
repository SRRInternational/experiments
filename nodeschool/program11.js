/* 
HTTP server that serves the same text file for each request it receives

listen on the port provided by the first argument

location of the file to serve as the second command-line argument

 */  
  const http = require('http')
  const fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];


const server = http.createServer(function (req, res) {
    var filedata = fs.readFileSync(file).toString();
    res.write(filedata);
})
server.listen(port)