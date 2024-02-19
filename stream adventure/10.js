// HTTP CLIENT

/* The req object that you get back from request() is a writable stream
and the res object in the callback function is a readable stream. */


const http = require('http')

const options = { method: 'POST' }
var req = http.request('http://localhost:8099', options, (res) => {
/*     console.log(res)
    process.stdin.pipe(res).pipe(process.stdout) */
    res.pipe(process.stdout)//write
})
process.stdin.pipe(req)//read from in