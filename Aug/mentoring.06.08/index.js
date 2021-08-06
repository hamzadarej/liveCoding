//npm i express
//import data from './data.json'
const express = require("express"); //old js  es5
//const request  = require("http");

//import express from "express"; // modern js es9
const myServer = express(); // creating an instance/copy of express by invoking express
myServer.listen(8000, () =>
  console.log("server up and running listening on port 8000")
);

myServer.get("/user/:id", (request, response) => {
  const users = ["hamza", "salim ", "anis", "caro","ahmed"];
  request.params.id > 4
    ? response.send(` you entered ${request.params.id} enter a number between 0 and 4`)
    : response.send("the user name is " + users[request.params.id]);
});
/*a request consist of the following parts 
-the method : GET 
-the path: '/'
-the controller function (req,res)=>response.json()

*/
