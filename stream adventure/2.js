/* 
  There are four types of streams:

  » Readable stream, which data can be read.
  » Writable stream, which data can be written.
  » Duplex stream, which is both Readable and Writable.
  » Transform stream, which is a Duplex stream that can modify or
    transformthe data as it is written and read.
 */
// Using fs.exists() method
/* fs.exists('/etc/passwd', (exists) => {
  console.log(exists ? 'Found' : 'Not Found!');
}); */
const fs = require('fs')
const filename = process.argv[2];
fs.createReadStream(filename).pipe(process.stdout)