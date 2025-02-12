var { execFile } = require("child_process");
var path = require("path");
var async = require("async");
var fs = require("fs-extra");
var execa = require("execa");
var path = require("path");
var async = require("async");
var fs = require("fs-extra");

const pwd = path.join("F:\\Training Projects\\experiments\\temp");
const dirPath = path.join(pwd, "git-pr-revert");
var stdoutData = "";
async.waterfall(
  [
    function (cb) {
      if (!fs.existsSync(dirPath)) return cb();
      else
        fs.rm(dirPath, { recursive: true }, function (err) {
          if (err) return cb(err);
          stdoutData += "Removed " + dirPath + "    ";
          cb();
        });
    },
    function (cb) {
      const gitUrl = "https://github.com/meharsh2001/git-pr-revert";
      const child = execa("git", ["clone", gitUrl], {
        cwd: pwd,
      })
        .then(function (stdout, stderr) {
          cb(null, stdout, stderr);
        })
        .catch(function (error) {
          cb(error);
        });
      /*       const child = execFile(
        "git",
        ["clone", gitUrl],
        {
          cwd: pwd,
        },
        function (error, stdout, stderr) {
          if (error) return cb(error);

          if (stdout.length != 0) {
            stdoutData += stdout;
          }

          if (stderr.length != 0) {
            stdoutData += stderr;
          }

          return cb();
        }
      ); */
    },
  ],
  function (error) {
    if (error) {
      return console.log(error);
    }
    console.log(stdoutData);
  }
);
