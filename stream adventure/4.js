//const http = require('http')
const { Readable } = require('stream')//destructure

//http.createServer(()=>{
    const rstream = new Readable();
    rstream._read = () => {};
    rstream.push(process.argv[2]);
    rstream.pipe(process.stdout);
//}).listen(8000)


 /* 
 var filedata = fs.readFileSync(file).toString();

    rstream.on('data',(chunk)=>{
        var chunk = chunk.toString();
        //res.write(chunk)
        //console.log(chunk)
        })
    rstream.on("end",()=>{
        res.end();
        })
    rstream.on("error",(error)=>{
        console.log(error);
        res.end('file not found');
        })
 */