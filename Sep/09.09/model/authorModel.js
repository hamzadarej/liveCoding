//subDocs
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    _id:false,
    title:String,
    issueYear:Number
});
const languageSchema = new mongoose.Schema({
    _id:false,
    languageNumber:Number,
    languageList:Array,
});
const authorSchema = new mongoose.Schema({
    authorName:String,
    books:[bookSchema],
    language:[languageSchema],
})
module.exports=mongoose.model("author",authorSchema);