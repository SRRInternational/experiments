const contextManager = require("./contextManager");

function getCurrentUser() {
  try {
    const requestDomain = contextManager.getCurrentDomain();

    if (!requestDomain?.session?.passport?.user) {
      return false;
    }

    return JSON.parse(JSON.stringify(requestDomain.session.passport.user));
  } catch (e) {
    console.error("Error retrieving current user:", e);
    return false;
  }
}

module.exports = { getCurrentUser };
