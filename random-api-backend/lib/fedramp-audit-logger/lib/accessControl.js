const { AccessControl } = require("accesscontrol");

// Initialize AccessControl
const ac = new AccessControl();

// Define roles and permissions
ac.grant("user");
// Users have no permissions for logs

ac.grant("auditor").extend("user").readAny("logs");

ac.grant("admin")
  .extend("auditor")
  .createAny("logs")
  .updateAny("logs")
  .deleteAny("logs");

// Check access for the user role
async function checkAccess(user, action, resource) {
  const permission = ac.can(user.role)[action](resource);
  if (!permission.granted) {
    throw new Error(`Unauthorized access to ${resource}`);
  }
  return permission;
}
module.exports = { checkAccess };
