const User = require('../model/userModel');
const middleware ={};
middleware.checkUser=async (req, res,next)=>{
    const user= await User.findOne({username: req.body.username});
    if(user){
        return res.status(404).json({ message: "USER USED ALREADY!" });
    }
next();
}

module.exports =middleware; 