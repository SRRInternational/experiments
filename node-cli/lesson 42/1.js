const meow = require("meow");

const helpText = `This is help text`;
const options = {
  flags: {
    social: {
      type: "boolean",
      default: false,
    },
    ad: {
      type: "boolean",
      default: false,
    },
  },
};

const cli = meow(helpText, options);

if (cli.flags.social) {
  // node 1 --social=true "hello" 
  console.log(cli.input);
}

if (cli.flags.ad) {
  console.log(cli);
}
