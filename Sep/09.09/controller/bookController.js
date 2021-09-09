const AuthorModel = require("../model/authorModel");
const bookController = {};

bookController.getAll = async (req, res) => {
  try {
    const author = await AuthorModel.find();
    res.status(200).json(author);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};

//add newAuthor
bookController.addNewAuthors = async (req, res) => {
  const newAuthor = new AuthorModel({
    authorName: req.body.name,
  });
  await req.body.books.map((book) => {
    newAuthor.books.push({
      title: book.title,
      issueYear: book.issueYear,
    });
  });
  await req.body.language.map((lang) => {
    newAuthor.language.push({
      languageNumber: lang.languageList.length,
      languageList: lang.languageList, 
    });

  });
  try {
    await newAuthor.save();
    res.status(201).json({ message: "this author been added", newAuthor });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
module.exports = bookController;
