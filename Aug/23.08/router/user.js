// Express setup
const express = require("express");
const router = express.Router();
const userData = require("../model/userModel");

// Get all Employee
router.get("/", async (req, res) => {
  try {
    const user = await userData.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add user
//url  http:localhost:5000/user
/*{
      name : "Hadi",
      age:31,
      add:"Berlin"
  } */
router.post("/", async (req, res) => {
  const user = new userData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getUser(req, res, next) {
  let user;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });

    user = await userData.findOne({ name: req.params.name });
    if (user == null)
      return res.status(404).json({ message: "user NOT Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(user);
  res.user = user;
  next();
}

// Get one employee
// url http://localhost:5000/employees/Hadi
router.get("/:name",getUser, (req, res) => {
  res.status(200).json(res.user);
});

// delete users
router.delete("/:name",getUser,async (req, res) => {
  
  try {
    await res.user.remove();
    res.status(200).json({ message: "User Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  
});
// Patch one employee (update the date "name","add","age")
router.patch("/:name",getUser ,async (req, res)=>{
  console.log(req.body);
  console.log(res.user);
  if(req.body.name){
    res.user.name=req.body.name;
  };
  if(req.body.age){
    res.user.age=req.body.age;
  };
  if(req.body.add){
    res.user.add=req.body.add;
  };
  console.log(res.user);
  try {
    await res.user.save();
    res.status(200).json({message:"User updated",data:res.user});
  }catch(err){res.status(400).json({message:err.message})}


})

module.exports = router;
