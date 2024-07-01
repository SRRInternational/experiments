const ora = require("ora");

const spinner = ora({ text: "Loading..." });

spinner.start();

setTimeout(function(){
  //console.log("This is plain text.");
  spinner.stop("Loaded.");
}, 6000)