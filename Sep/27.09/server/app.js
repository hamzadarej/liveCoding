const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// to process the data
app.use(express.json());
// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// cookies
app.use(cookieParser());
// Session
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);
// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
// Alow uploads
app.use("/uploads", express.static("uploads"));
const User = require("../server/models/userModel");
const bcrypt = require("bcrypt");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .gif .png files are OK"), false);
    }
  },
});

// get All users
app.get("/users", async (req, res) => {
  //const users = ["Zain", "Nancy", "Olga", "Jack"];
  const getAll = await User.find();
  res.status(200).json(getAll);
  //console.log(getAll);
});
// add new user
app.post("/register", upload.single("avatar"), async (req, res) => {
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
    res.status(201).json({ message: "New user being add" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = app;
