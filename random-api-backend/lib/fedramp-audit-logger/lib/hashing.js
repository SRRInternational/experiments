const crypto = require("crypto");

function generateLogHash(logEntry) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(logEntry))
    .digest("hex");
}

module.exports = { generateLogHash };
