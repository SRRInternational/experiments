process.on("beforeExit", function () {
  console.log(`Progress before exited with code 0`);
});
process.on("exit", function () {
  console.log(`Progress exit event with code 0`);
});

console.log(`Hello`);
process.exit();
