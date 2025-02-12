const { AsyncLocalStorage } = require("async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();

module.exports = {
  runWithContext: (req, callback) => {
    asyncLocalStorage.run(new Map(), () => {
      const store = asyncLocalStorage.getStore();
      store.set("request", req); // Store the request inside the map
      callback();
    });
  },

  getCurrentRequest: () => {
    const store = asyncLocalStorage.getStore();
    return store ? store.get("request") : undefined;
  },

  getCurrentDomain: () => {

    var id = executionAsyncId();

    console.log("Current execution Id: ", id);
    console.log("Domains: ", domains);
    const data = {
      domains: domains.get(id),
      executionId: id,
    }
    return data;
  },

  clearDomain: (asyncId) => {
    domains.delete(asyncId);
  },
};
