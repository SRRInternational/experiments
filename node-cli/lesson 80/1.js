const { green: g, yellow: y, dim: d } = require("chalk");
const ora = require("ora");
const spinner = ora({ text: "" });
const execa = require("execa");
const pkgs = ["express", "lodash", "axios", "chalk", "meow"];

spinner.start(`${y("Running...")} ${d("please wait")}`);

(async () => {
  const dirName = "testing";
  await execa("rmdir", [dirName]);
  await execa("mkdir", [dirName]);

  process.chdir(dirName);

  await execa(`npm init -y`);
  await execa(`npm`, ["install", ...pkgs]);

  spinner.succeed(`${g("Success...")} dir created successfully`);
})();
