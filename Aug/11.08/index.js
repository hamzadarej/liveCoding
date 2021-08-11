require("dotenv").config();
const data = require("./data.json")
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
app.get("/user",userLogged, (req, res) => {
  console.log(req.query);
  //const username = req.query.name;
  //const userAge = req.query.age;
 const username=req.query.username
  res.send(`hey I am ${username} `);
});
function userLogged(req,res,next){
  if(req.query.username==="salim"||req.query.username==="hamza"){
    console.log('log 2')
  //res.username="hamza";
next();}else{res.send("Login or Register")}
}

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

// GET method  http://localhost:5000/api
app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", country: "DE" });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
