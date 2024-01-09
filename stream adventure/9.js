const http = require('http')
const server = http.createServer(function (req, res) {
    const through = require('through2')

    if (req.method == 'POST') {
        //console.log('req found')
        const stream = through(function (buffer, encoding, next) {
            var buffer = buffer.toString()
            this.push(buffer.toUpperCase())
            next()
        })
        req.pipe(stream).pipe(res)
    }/* else{
        res.end('post req not found')
    } */
});


server.listen(process.argv[2]//,()=>{console.log('started')}
)