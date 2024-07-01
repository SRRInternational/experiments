const readline = require("readline");
const chalk = require("chalk");

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(chalk.yellow("Enter your name....\n"), function (name) {
    console.log(chalk.blue("Hello " + name));
    rl.close();
  });
})();
