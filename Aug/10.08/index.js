//require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/home", (req, res) => {
  res.send("Hey, I am home page");
});
 
app.get("/about/", (req, res) => {
  res.send("I am About page");
});


app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
