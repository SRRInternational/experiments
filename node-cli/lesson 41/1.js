if (process.argv.indexOf("--flag") === -1) {
  console.log(process);
  console.log(process.cwd());
  console.log("flag not passed");
} else {
  console.log(process.cwd());
  console.log("flag passed");
}
