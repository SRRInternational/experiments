/* 
 receives only POST requests

  converts incoming POST body characters to upper-case

  port provided by the first argument


   "transform" stream data as it's passing through

    through2-map allows you to create a transform stream using only a single
     function that takes a chunk of data and returns a chunk of data


   */
const http = require('http')
const fs = require('fs');
const map = require('through2-map')
var port = process.argv[2];


const server = http.createServer(function (req, res) {
    if(req.method == 'POST'){
    req.pipe(map(function (chunk) {
      var data = chunk.toString().toUpperCase();
      console.log(data);
      return data;
    })).pipe(res)}
})
server.listen(port)     