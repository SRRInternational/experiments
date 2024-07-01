const handleErr = require("cli-handle-unhandled");
process.on("beforeExit", function () {
  console.log(`Progress before exited with code 0`);
});
process.on("exit", function () {
  console.log(`Progress exit event with code 0`);
});

(async () => {
  console.log(`Hello`);
  const err = new Error("Sample Error");
  handleErr("Error 1", err, false, false);
  process.exitCode = 1;
})();
