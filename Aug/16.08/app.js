const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./router/users");
const createError = require("http-errors");
app.use(morgan("dev"));

// Middleware for specific route ,it have to be before
app.use("/users", (req, res, next) => {
  console.log(req.query.userName);
  if (req.query.userName !== "hamza")
    return next(createError(401, "Login to see this page"));
  next();
});
app.use("/users", userRouter);
app.get("/", (req, res) => {
  console.log("Get");
  res.status(200).json({ text: "this is a Get req" });
})  .post("/", (req, res) => {
    console.log("POST");
    res.status(200).json({ text: "This is a POST req" });
  })
  .put("/", (req, res) => {
    console.log("PUT");
    res.status(200).json({ text: "This is a PUT req" });
  })
  .delete("/", (req, res) => {
    console.log("DELETE");
    res.status(200).json({ text: "This is a DELETE req" });
  });

module.exports = app;
