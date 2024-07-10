require.config({
  baseUrl: "js",
  paths: {
    module1: "module1",
    module2: "module2",
  },
});

require(["module1", "module2"], function (module1, module2) {
  console.log(module1.hello());
  console.log(module2.greet());
});
