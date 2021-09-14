const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userControllers = {};

//get all users
userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// add newUser using bcrypt to secure the pass
userControllers.addNewUser = async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPass,
    });
    newUser.save();
    res.status(201).json({ message: "welcome to our DB" });
    // 10 is one of the rounds series
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// post login
userControllers.logIn = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const checkPass = await bcrypt.compare(req.body.password, user.password);
    if (!checkPass) {
      return res
        .status(400)
        .json({ message: "false password please try again " });
    } else {
      return res
        .status(200)
        .json({ message: "you are logged in successfully" });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = userControllers;
