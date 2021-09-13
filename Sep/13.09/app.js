const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());
// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

const booksControllers = require("./controller/bookController");
// GET all authors
// Add new author
app
  .route("/")
  .get(booksControllers.getAllAuthors)
  .post(booksControllers.addAuthor);
// GET all books
// POST new book for an author
app.route("/book").get(booksControllers.getAllBooks);
app.route("/book/:id").post(booksControllers.addNewBook);
// GET all books from an author
// using author id
app.route("/books/:id").get(booksControllers.getAllBooksAuthor);
// DEL later
// PUT
// PATCH

module.exports = app;
