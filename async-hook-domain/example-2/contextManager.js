const { AsyncLocalStorage } = require("async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();

module.exports = {
  runWithContext: (req, callback) => {
    asyncLocalStorage.run(req, callback);
  },

  getCurrentRequest: () => {
    return asyncLocalStorage.getStore();
  },
};
