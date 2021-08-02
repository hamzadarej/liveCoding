module.exports = (stars = 10, header = "hey") => {
  console.log(`${"*".repeat(stars)}\n${header}\n${"*".repeat(stars)}`);
};
