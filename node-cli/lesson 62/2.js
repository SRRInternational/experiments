const { exec } = require("child_process");
const dirName = process.argv[2];
if (dirName) exec(`mkdir ${dirName}`);
else console.log(`No dir name found`);
