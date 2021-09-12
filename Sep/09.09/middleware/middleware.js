const AuthorModel = require("../model/authorModel");

const checkAuthor = async (req, res, next) => {
  (await AuthorModel.findById(req.params.id)) == null
    ? res.status(404).json({ message: "author not found !" }).end()
    : next();
};
module.exports = checkAuthor;
 