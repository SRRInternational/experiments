// backend/utils/unzip.js
const unzipper = require("unzipper");
const fs = require("fs");
const path = require("path");

const unzipCourse = (zipFilePath, outputPath) => {
  return fs
    .createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: outputPath }))
    .promise();
};

module.exports = unzipCourse;
