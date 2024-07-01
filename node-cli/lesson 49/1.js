const meow = require("meow");
const handleErr = require("cli-handle-unhandled")();

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

process.on("unhandledRejection", function () {
  console.log(`Progress exit event with code 0`);
});

(async () => {
  console.log(`Hello`);
  Process.reject(new Error("Sample Error"));
})();
