// source =>// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags

const fs = require("fs");
// create file
// writeFile will create or overwrite
/*
// appendfile will create file
fs.appendFile("newText.txt","I am text from nodejs 🥳 \n",(err)=>{if(err) throw err ;
console.log("File is done 👍 line 7 ")});


// read File
fs.readFile("./longText.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data , "line 13");
});

// read file Sync => blocking code
const data = fs.readFileSync("./longText.txt");
console.log(data.toString(),"line 18");
console.log("reading file is done ✅ line 19")
// rename file 
fs.rename("./hello.txt","./hey.text",(err)=>{
    if(err)throw err;
    console.log("Rename file done ✅ ");
})
// delete file fs.unlink = delete
const filePathName = "./something.txt";
fs.unlink(filePathName, (err)=>{
    if (err) throw err;
    console.log("File deleted , ❎")
})

// copy file 
fs.copyFile("./original.txt","./copyFromOG.txt",(err)=>{
    if(err)throw err;
    console.log("copy file,Done ☑️ line 24")
})

*/

fs.open("./highText.txt", "r", (err, fd) => {
  if (err) throw err;
  console.log(fd);
  console.log("flags ");
});
