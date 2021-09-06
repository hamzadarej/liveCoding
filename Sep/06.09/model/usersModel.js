const mongoose = require("mongoose");
const usersDataSchema = new mongoose.Schema({
  email: {
    type: String,
    
    
  },
  password: {
    type: String,
   
    
  },
  passwordConf: {
    type: String,
    
  }
});
// new collection
module.exports = mongoose.model("userData", usersDataSchema);
