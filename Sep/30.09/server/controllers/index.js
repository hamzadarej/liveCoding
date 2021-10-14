const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const { createToken } = require("../JWT-check");
const controllers = {};
controllers.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).end();
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
controllers.register = async (req, res) => {
  const userCheck = await User.findOne({ username: req.body.username });

  if (userCheck) {
    return res.status(400).json({ message: "This name is already been used" });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    console.log(req.file);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword,
      role: "USER",
      avatar: req.file.path,
    });
    console.log(newUser);
    newUser.save();
    res.status(201).json({ message: `${username} user being add ✅` });
  } catch (err) {
    res.json({ message: err.message, errors: console.log("hey") });
  }
};
controllers.login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await User.findOne({ username });
  if (user == null) {
    return res.status(404).json({ message: "Cannot find user" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      const token = createToken(user);
      res.json({
        auth: true,
        token,
        user: {
          _id: user._id,
          username: user.username,
          role: user.role,
          avatar: user.avatar,
          password: user.password,
        },
      });
    } else {
      res.json({
        message: "Not Allowed, please check your username or password",
      });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
controllers.logout = async (req, res) => {
  res.cookie("token-key", "", { maxAge: 1 });
  res.redirect("/");
};
module.exports = controllers;
