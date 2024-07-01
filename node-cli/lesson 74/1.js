const ask = require("./ask");
const { Input } = require("enquirer");
const chalk = require("chalk");

(async () => {
  const prompt = new Input({
    name: "question", // or  name: "name",
    message: "Did you like enquirer?",
  });
  prompt
    .run()
    .then((ans) => {
      if (ans)
      console.log(chalk.blue("Hello " + ans))

    });
})();
