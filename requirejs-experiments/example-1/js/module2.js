define(["./module1"], function (module1) {
  return {
    greet: function () {
      return module1.hello() + " Greetings from Module 2!";
    },
  };
});
