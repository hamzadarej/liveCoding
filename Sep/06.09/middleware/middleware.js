const UsersModel = require("../model/usersModel");
var  {validationResult } = require("express-validator");
const userExict = async (req, res, next) => {
  const userByEmail = await UsersModel.findOne({ email: req.body.email });
  const userEmail = req.body.email;
const errors = validationResult(req);
if (userByEmail?.email == userEmail) {
    return res.render("index",{
        title: "you are already registered",
        errors:errors.array()
    });
  }

  next();
};

module.exports = userExict;
