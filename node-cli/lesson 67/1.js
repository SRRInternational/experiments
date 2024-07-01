const meowHelp = require("cli-meow-help");

const commands = {
  help: { desc: `Command will guide yout about node command` },
};

const flags = {
  v: {
    desc: `Prints node version`,
    type: "boolean",
    default: true,
  },
};

const helpText = meowHelp({
  name: `node`,
  desc: `Usage: node [options] [ script.js ] [arguments]
       node inspect [options] [ script.js | host:port ] [arguments]`,
  flags,
  commands,
});

console.log(helpText);
