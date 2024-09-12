const schedule = require("node-schedule");
const fs = require("fs");
const path = require("path");

// Define retention period in years
const retentionPeriodInYears = 7;

function deleteOldLogs(logDirectory) {
  const logs = fs.readdirSync(logDirectory);
  logs.forEach((logFile) => {
    const logFilePath = path.join(logDirectory, logFile);
    const stats = fs.statSync(logFilePath);
    const creationTime = new Date(stats.birthtime);
    const now = new Date();
    const ageInYears = (now - creationTime) / (1000 * 60 * 60 * 24 * 365);

    if (ageInYears > retentionPeriodInYears) {
      fs.unlinkSync(logFilePath); // Delete old log
      console.log(`Deleted old log: ${logFilePath}`);
    }
  });
}

// Schedule daily log cleanup
function scheduleLogCleanup(logDirectory) {
  schedule.scheduleJob("0 0 * * *", () => {
    deleteOldLogs(logDirectory);
  });
}

module.exports = { scheduleLogCleanup };
