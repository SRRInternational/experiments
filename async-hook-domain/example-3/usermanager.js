const contextManager = require("./contextManager");

function getCurrentUser() {
  const req = contextManager.getCurrentRequest();
  return req?.session?.passport?.user || false;
}

module.exports = { getCurrentUser };
