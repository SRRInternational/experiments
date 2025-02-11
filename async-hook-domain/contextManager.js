const { executionAsyncId } = require("async_hooks");

const domains = new Map(); // Store execution contexts

module.exports = {
  setDomain: (asyncId, domain) => {
    domains.set(asyncId, domain);
  },

  getCurrentDomain: () => {
    return domains.get(executionAsyncId());
  },

  clearDomain: (asyncId) => {
    domains.delete(asyncId);
  },
};
