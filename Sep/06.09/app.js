const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
//setups
//const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
var { body, validationResult } = require("express-validator");


// use it
app.use(express.json());
//app.use(cookieParser());
app.use(
  expressSession({
    secret: "12345678",
    saveUninitialized: false,
    resave: false,
  })
);
// monogDB
//var jsonParser = bodyParser.json()
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
const userData = require("./model/usersModel");
// get req
app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    done: false,
    errors: req.session.errors,
    //data:"this is me"
  });
  req.session.errors = null;

});
// middleware
const userExict= require("./middleware/middleware")
// post req

app.post(
  "/submit",userExict,
  body("email", "Please write valid email").isEmail(),
  body("pass", "invalid pass").isLength({ min: 5 }).withMessage("min 5 chars"),
  body("passConf").custom((value, { req }) => {
    if (value != req.body.pass) {
      throw (
        (new Error("password is false ,please repeat"),
        console.log("password is false"))
      );
    }
    return true;
  }),
  async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      res.render("index",{
        title: "check your info !",
        errors:errors.array()
      })
    
    }else{
    const user = new userData({
      email: req.body.email,
      password: req.body.pass,
      passwordConf: req.body.passConf,
    });
    try {
      const newUser = await user.save();
      console.log(newUser);

      
      res.render("index",{
        title:"Nice you are in our DB",
        done:true
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });}
    }
  }
  
);

module.exports = app;
