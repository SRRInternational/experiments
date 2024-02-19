var unzip = require("unzipper");
var outputPath = "F:\\update_adapt_authoring\\grunt.zip";
var zip = unzip.Extract({ path: outputPath });
console.log(zip)