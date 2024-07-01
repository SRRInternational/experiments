const { Toggle } = require("enquirer");
const chalk = require("chalk");

(async () => {
  const prompt = new Toggle({
    name: "question", // or  name: "name",
    message: "Did you like enquirer?",
    enabled: "20001",
    disabled: "20003",
  });
  prompt
    .run()
    .then((ans) => {
      if (ans)
      console.log(chalk.blue("Hello " + ans))

    });
})();
