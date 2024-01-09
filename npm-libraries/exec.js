var spawn = require('child_process').spawn;

const pwd = spawn('grunt build:dev',{shell: true });//false

pwd.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

pwd.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

pwd.on('error', (err) => {
  console.log(`${err}`);
});
/* const cp = require('child_process');

//cp.spawnSync("git clone", { shell: false }); 
var stdoutData = '';
var errData = '';
try{
    const child = cp.execSync('dair',{shell:false});
    console.log(child.toString())
}catch(err){
    console.log(err.stderr.toString())

}

function execCommand(cmd, opts, callback) {
    if(arguments.length === 2) {
      callback = opts;
      opts = {};
    }
  
    try{
        var child = cp.execSync(cmd, _.extend({ shell: false , stdio: [0, 'pipe', 'pipe'] }, opts));
        callback(null, child.toString());
      } catch(err){
        callback(err.stderr.toString());    
    }
    /*  
    var stdoutData = '';
    var errData = '';
    var child = exec(cmd, _.extend({ stdio: [0, 'pipe', 'pipe'] }, opts));
    child.stdout.on('data', function(data) { stdoutData += data; });
    child.stderr.on('data', function(data) { errData += data; });
    child.on('exit', function(error) {
      if(error) {
        return callback(errData || error);
      }
      callback(null, stdoutData);
    }); 
  }*/