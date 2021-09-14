const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
const userControllers = require("./controllers/userController");
const userMiddleware = require("./middleware/middleware");
//Get allUsers
app
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userMiddleware.checkUser, userControllers.addNewUser);
  app.route("/login").post(userMiddleware.userExict,userControllers.logIn)

module.exports = app;
