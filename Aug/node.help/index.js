const { showHelp } = require("./message");
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-v")) {
  showHelp();
}
