const contextManager = require("./contextManager");

function getCurrentUser() {
  try {
    const { domains, executionId } = contextManager.getCurrentDomain();

    if (!domains?.session?.passport?.user) {
      return false;
    }

    return JSON.parse(JSON.stringify(domains.session.passport.user));
  } catch (e) {
    console.error("Error retrieving current user:", e);
    return false;
  }
}

module.exports = { getCurrentUser };
