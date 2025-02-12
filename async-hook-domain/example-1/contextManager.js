const { executionAsyncId } = require("async_hooks");

const domains = new Map(); // Store execution contexts

module.exports = {
  setDomain: (asyncId, domain) => {
    domains.set(asyncId, domain);
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
