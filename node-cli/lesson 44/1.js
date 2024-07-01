const meow = require("meow");

const helpText = `This is help text`;
const options = {
  interType: false,
  flags: {
    social: {
      type: "boolean",
      default: false,
    },
    ad: {
      type: "boolean",
      default: false,
    },
    debug: {
      type: "boolean",
      default: false,
      alias: "d",
    },
    version: {
      type: "boolean",
      default: false,
      alias: "v",
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

if (cli.flags.debug) {
  console.log("debugging mode is on");
}

if (cli.flags.version) {
  console.log("v1.0.1");
}
