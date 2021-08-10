require("dotenv").config();
const express = require("express");
const app = express();
const PORT =process.env.PORT||8000;

app.get("/hey", (req, res) => {
  res.send("hey, im a response");
});
app.get("/about", (req, res) => {
  res.send("hey, im a response about");
});
app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});
