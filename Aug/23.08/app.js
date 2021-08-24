const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());
//mongodb
const mongoose= require("mongoose");
const DB_URL=process.env.DB_URL;
mongoose
.connect(DB_URL,{useUnifiedTopology: true,useNewUrlParser: true})
.then(console.log("DB is connected"))
.catch((error) => console(error.message))
const user =require("./router/user");
app.use("/user",user)
app.get("/",(req,res) => {
    res.status(201).send("welcome to the route Route")
})
module.exports = app;