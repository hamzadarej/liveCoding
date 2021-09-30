const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const cookieParser = require("cookie-parser");
const session = require("express-session");

const { checkToken } = require("./JWT-check");
const controllers = require("./controllers/");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
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
// session
app.use(
  session({
    key: "token-key",
    secret: process.env.TOKEN_TEXT,
    resave: false,
    saveUninitialized: false,
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
console.log(process.env.TOKEN_TEXT);
app.get("/users", controllers.getAll);
app.post("/register", upload.single("avatar"), controllers.register);
app.post("/login", controllers.login);
//app.get("/checkAuth", checkToken);
module.exports = app;
