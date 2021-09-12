const express = require("express");
const AuthorModel = require("./model/authorModel");
const app = express();
const morgan = require("morgan");
const path = require("path");
app.use(morgan("dev"));
// set && require hbs
const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
console.log(__dirname, "views");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
// use session
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(session({ secret: "dark-code" }));
//convert to json
app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(), cookieParser());

// connect Mongoose

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(err.message);
  });
//use hbs
app.get("/hbs", (req, res) => {
  res.render("index", { title: "hbs", data: "welcome to handlebars home" });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "addAuthor",
    data: "register",
  });
});

app.post("/submit", async (req, res) => {
  const author = await new AuthorModel({
    authorName: req.body.authorName,
    books: [{ title: req.body.title, issueYear: req.body.issueYear }],
    language: [
      {
        languageNumber: req.body.languageNumber,
        languageList: req.body.languageList,
      },
    ],
  });

  try {
    const newOne = await author.save();
    //console.log(newOne);
    res.render("contact", {
      title: "Nice you are in our DB",
      data: newOne,
    });
  } catch (err) {
    res.status(400).render({
      title: err.message,
    });
  }
});
//const bookController = require("./controller/bookController");
// GET ALL && POST AUTHORS
/*
app.route("/").get(bookController.getAll).post(bookController.addNewAuthors);
// getOneById && deleteOneById
const checkAuthor = require("./middleware/middleware");
app
  .route("/:id")
  .get(checkAuthor, bookController.getOneByID) 
  .delete(checkAuthor, bookController.deleteOneByID)
  .put(checkAuthor, bookController.updateAuthorData);*/

module.exports = app;
