var http = require("http");
var url = process.argv[2];
http.get(url,(response) => {
    response.setEncoding('utf-8');
    response.on('error',(error)=>{
        console.log(error);
    })
    response.on('data', (data)=> { 
        console.log(data.toString());
    })
})    