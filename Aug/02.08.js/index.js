console.log(process.argv); //get the version of node and the address of the file
//this the most used one
//const args = process.argv.slice(2);
//console.log(args);

//process.argv.forEach((item,i) => {
//console.log(`${i}:${item}`);
//});
// fs (file system) built-in module 
/*const fs = require("fs");

// read file 
fs.readFile("./text.txt","utf8",function (err,data){
    if (err) throw err;
    console.log(data)
});
// write file
 fs.writeFile("new.txt","this is file created in NodeJs",(err)=>{if (err)throw err; console.log("Done")})

 // import js file
 const args = process.argv.slice(2);
 let stars=args[0];
 let header =args[1];
 const print = require("./stars")
 print(stars,header)*/


 function sum(numArray) {
    return numArray.reduce((sum, n) => sum + n, 0);
  }
  function avg(numArray) {
    return sum(numArray) / numArray.length;
  }
  function oddOREven(numArray){
      if(numArray%2==0)return "Even";else return "Odd"


  }
  
  function parsNum(arg) {
    const number = parseFloat(arg);
    if (isNaN(number)) {
      console.log(`Sorry, ${arg} is not a number, Please try again.`);
      process.exit();
    }
    return number;
  }
  const args = process.argv.slice(2);
  const [operation, ...rest] = args;
  const numbers = rest.map(parsNum);
  // sum 2 4 f
  // avg 33 5 3 2 55
  
  function med(numArray) {
    switch (operation) {
      case "sum":
        console.log(sum(numArray));
        break;
        case "oddOREven":
            console.log(oddOREven(numArray));
            break;
      case "avg":
        console.log(avg(numArray));
        break;
      default:
        console.log("I can not do this task yet, please write sum or avg");
    }
  }
  med(numbers)