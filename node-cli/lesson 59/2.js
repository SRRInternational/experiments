const { prompt } = require("enquirer");
const chalk = require("chalk");

(async () => {
  const res = await prompt({
    type: "input",
    name: "username",// or  name: "name",
    message: "Enter your username?",
  });
  console.log(chalk.blue("Hello " + res.username));
})();
