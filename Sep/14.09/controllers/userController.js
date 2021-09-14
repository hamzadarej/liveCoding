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
    console.log(hashedPass);
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
module.exports = userControllers;
