require("dotenv").config();

//express
const express = require("express");
const app = express();
//help express to read json
app.use(express.json());
//add a function as a parm for middleware
app.use(logger)
// http://localhost:5000/
app.get("/", (req, res) => {
 console.log(req);
  res.send("welcome to our app");
});
// http://localhost:5000/about
app.get("/about", (req, res) => {
  console.log(req);
  res.send("welcome to our app/about");
});
// http://localhost:5000/user?name=hamza&age=31
app.get("/user", (req, res) => {
  console.log(req.query);
  const username = req.query.name;
  const userAge = req.query.age;
  res.send(`hey I am ${username} and I'm ${userAge} old`);
});

//post

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const pass = req.body.pass;

  if (userName === "hamza" && pass === "12345") {
    res.status(200).send(`cool, welcome ${userName}`);
  } else {
    res
      .status(401)
      .send(`welcome to our page you have to register ${userName}`);
  }
});
// Middelware
function logger (req, res, next) {console.log("log 1");
next();}


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
