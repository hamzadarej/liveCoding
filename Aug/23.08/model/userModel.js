
const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  add: String,
  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("userData", userDataSchema);
// work on old collection that we have
// module.exports = mongoose.model("EmployeesData",employeesDataSchema, "EmployeesData");