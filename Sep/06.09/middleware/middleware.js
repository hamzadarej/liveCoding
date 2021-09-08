const UsersModel = require("../model/usersModel");

const userExict = async (req, res, next) => {
  const userByEmail = await UsersModel.findOne({ email: req.body.email });
  const userEmail = req.body.email;

if (userByEmail?.email == userEmail) {
    return res.render("index",{
        title: "you are already registered",
        });
  }
next();
};

module.exports = userExict;
