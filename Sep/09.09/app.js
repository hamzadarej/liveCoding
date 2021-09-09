const express =require('express');
const app=express();
const morgan = require('morgan');

app.use(morgan("dev"));

//convert to json 
app.use(express.json());

// connect Mongoose

const mongoose=require('mongoose');
mongoose
.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("DB is connected"))
.catch((err)=>{
    console.log(err.message);
});
  
const bookController=require("./controller/bookController"); 
// GET ALL && POST AUTHORS
app.route("/").get(bookController.getAll).post(bookController.addNewAuthors);
// FINDONEBYID && DELETEONEBYID



module.exports = app;  
