// WRITE IT TO ME
    const { Writable } = require('stream')

class MyWritable extends Writable {
    _write (chunk, encoding, callback) {
      console.log(`writing: ${chunk.toString()}`)
      callback()
    }
  }
  
  const stream = new MyWritable()
  process.stdin.pipe(stream)


  
 /* const { Writable } = require('stream')

const stream = new Writable({
write: function(chunk, encoding, next){
        var data = 'writing: ' + chunk.toString()
        console.log(data);
        next()
    }
})
    const data = new write() ;
    stream.write(data)

   */  
   

 /* 
const readable = new Readable();
readable._read = () => {};
readable.push('hello'); */

//stream.pipe(process.stdin)
    

/* const http = require('http')
http.createServer(() => {
 */
/*     const { Readable,Writable } = require('stream')

    const readable = new Readable();
    readable._read = () => {};
    readable.push('hello');
    const stream = new Writable({
    write: (chunk, encoding, next)=>{
            var data = 'writing: ' + chunk.toString()
            console.log(data);
            next()
        }
    })

    readable.on('data', (chunk) => {
        stream.write(chunk)
      }) */
/*       
    var chunk = 'test'
    stream.write(chunk,'utf-8',()=>{}) */
    //stream.pipe(process.stdin)

/* 
}).listen(8000) */
/* 
stream.write()
stream.push();
stream.pipe(process.stdout); */