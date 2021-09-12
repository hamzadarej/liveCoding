const AuthorModel = require("../model/authorModel");
const bookController = {};

bookController.getAll = async (req, res) => {
  try {
    const author = await AuthorModel.find();
    res.status(200).json(author);
  } catch {
    res.status(404).json({ message: "not found" });
  }
};

//add newAuthor
bookController.addNewAuthors = async (req, res) => {
  const newAuthor = new AuthorModel({
    authorName: req.body.name,
  });
  req.body.books.map((book) => {
    newAuthor.books.push({
      title: book.title,
      issueYear: book.issueYear,
    });
  });
  req.body.language.map((lang) => {
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
// getOneById && deleteOneById
bookController.getOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findById(req.params.id);
    res.status(200).json(author);
  } catch {
    res.status(404).json({ message: "author not found" });
  }
};
bookController.deleteOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "This author been deleted", author });
  } catch {
    res.status(404).json({ message: "author not found" });
  }
};
// update all author data (put)
bookController.updateAuthorData = async (req, res) => {
  try {
    const authorNewData = await AuthorModel.findByIdAndUpdate(req.params.id, {
      $set: {
        authorName: req.body.name,
        books:await req.body.books.map((book) => book),
        language:await req.body.language.map((l)=>l)
      },
    });
    res.status(200).json({ message: "author been updated", authorNewData });
  } catch (err) {
    res.status(400).json({ err: "break" });
  }
};

module.exports = bookController;
