console.log(process.argv); //get the version of node and the address of the file
//this the most used one
const args = process.argv.slice(2);
console.log(args);

//process.argv.forEach((item,i) => {
//console.log(`${i}:${item}`);
//});
// fs (file system) built-in module 
const fs = require("fs");

// read file 
fs.readFile("./text.txt","utf8",function (err,data){
    if (err) throw err;
    console.log(data)
});
// write file
 fs.writeFile("new.txt","this is file created in NodeJs",(err)=>{if (err)throw err; console.log("Done")})
