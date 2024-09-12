const fs = require("fs");
const path = require("path");
const { generateLogHash } = require("./lib/hashing");
const { encryptLogEntry, decryptLogEntry } = require("./lib/encryption");
const { checkAccess } = require("./lib/accessControl");
const { scheduleLogCleanup } = require("./lib/retention");
const winston = require("winston");
// const CloudWatchTransport = require("winston-cloudwatch");
const crypto = require("crypto");

const encryptionKey = process.env.ENCRYPTION_KEY || crypto.randomBytes(32);

// Create logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: "./logs/audit.log" }),
    // new CloudWatchTransport({
    //   logGroupName: "YourLogGroup",
    //   logStreamName: "YourLogStream",
    //   awsRegion: "us-east-1",
    // }),
  ],
});

// Middleware to log requests
function auditLogger(req, res, next) {
  const user = req.user || { username: "anonymous", role: "user" }; // Assuming req.user is available
  const logEntry = {
    event: req.method,
    path: req.url,
    user: user.username,
    role: user.role,
    sourceIPAddress: req.ip,
    userAgent: req.headers["user-agent"],
    time: new Date().toISOString(),
    outcome: res.statusCode,
  };

  // Add hash to log
  logEntry.hash = generateLogHash(logEntry);

  // Encrypt log
  const encryptedLog = encryptLogEntry(logEntry, encryptionKey);

  // Write encrypted log to file
  fs.appendFileSync("./logs/audit.log", JSON.stringify(encryptedLog) + "\n");

  // Log to CloudWatch (if needed)
  logger.info("Audit Log", logEntry);

  next();
}

// Schedule log cleanup
scheduleLogCleanup("./logs");

// Export middleware for use in other apps
module.exports = { auditLogger, checkAccess };
