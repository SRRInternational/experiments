const chalk = require("chalk");
const sym = require("log-symbols");
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.inverse;
const orange = chalk.keyword("orange");
const orangeI = chalk.keyword("orange").inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = (options) => {
  const defaultOptions = {
    type: "error",
    msg: "you forgot something",
  };
  const opts = { ...defaultOptions, ...options };
  const { type, msg } = opts;
  if (type === "success") {
    console.log(`${sym.success} ${greenI("success")} ${green(msg)}`);
  }
  if (type === "warning") {
    console.log(`${sym.success} ${orangeI("warning")} ${orange(msg)}`);
  }
  if (type === "info") {
    console.log(`${sym.success} ${blueI("info")} ${blue(msg)}`);
  }
  if (type === "error") {
    console.log(`${sym.success} ${redI("error")} ${red(msg)}`);
  }
};
