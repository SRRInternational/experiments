const RBAC = require("rbac-a");

// Define roles and permissions
const rbac = new RBAC({
  roles: ["admin", "auditor", "user"],
  permissions: {
    logs: ["read", "write", "delete"],
  },
  grants: {
    admin: ["read_logs", "write_logs", "delete_logs"],
    auditor: ["read_logs"],
    user: [], // No log access for users
  },
});

// Check access for the user role
async function checkAccess(user, action) {
  const hasAccess = await rbac.can(user.role, action);
  if (!hasAccess) {
    throw new Error("Unauthorized access to logs");
  }
}

module.exports = { checkAccess };
