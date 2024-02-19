const fetch = require('node-fetch');
var express = require('express');
    var app = module.exports = express();   

    fetch('http://localhost:5000/api/authcheck')
    .then(res => res.text())
    .then(text => console.log(text));

    app.listen(8000,function(){
        console.log(this.address().port)
    });