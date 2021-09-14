const User = require("../model/userModel");
const middleware = {};
middleware.checkUser = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(404).json({ message: "USER USED ALREADY!" });
  }
  next();
};
middleware.userExict = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user == null) {
    return res
      .status(404)
      .json({ message: "USER NOT FOUND! try again or register" });
  }
  next();
};

module.exports = middleware;
