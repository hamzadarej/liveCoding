const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("Router");
    res.status(200).json({text:"this is user router"})
})

router.get('/about',(req,res)=>{
    console.log("about/Router");
    res.status(200).json({text:"this is user router/about"})
})

module.exports =router