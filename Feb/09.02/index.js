// OBjects
const obj1={};
obj1["name"]="Olga";
console.log(obj1);
const obj2={
    userName:"hamza",
};
const obj3= new Object();
obj3.name="anis";
console.log(obj3)
const person ={
    userName:"mahmoud",
    age:27,
    add:"leipzig",
};
const arr =Object.entries(person)//its take obj and give us an array(converting)
console.log(arr);
//[[],[],[]]
const arrOfArr=[
    [22,5],
    [45,6],
    [80,12],
]
console.log(arrOfArr[1][1]);
//
const objects = [
    { name: "ahmed", lasName: "ziko" },
    {
      name: "Anna",
      lastName: "lee",
      printOut: function () {
        console.log("this is a function in the object");
      },
    },
  ];
  console.log(objects[1].printOut());
  console.log(objects[1]["printOut"]());
  // Clones vs. References

// Primitive  (Simple values are always clones)
// String, Number, Boolean
let x = 3;
let z = x; // clone coz it's simple
console.log(z);
z = 55;
console.log(x);
let strLong = "Hi, I am here";
let cloneStr = strLong; // clone coz it's simple
cloneStr = "Noooooooooo";
console.log(strLong);

// Object
const car = {
  name: "Ford",
  year: "2020",
  color: "Red",
};
// Objects are references by default: Array and object literals

const newCar = car; // ref

newCar.name = "BMW";
console.log(car);
const names = ["Olga", "Zain", "Jack", "Nancy"];
//  1
const namesClone = [...names];
namesClone[0] = "Hadi";
console.log(names);

// 2
const newCloneArr = [].concat(names);
console.log(newCloneArr);
// 3
const lastWay = names.slice(0);
lastWay[0] = "cool";
console.log(lastWay);


console.log("----------------------assignments--------------------")
//1
const objectToArray=({
    A: 1,
    B: 2,
    C: 3
  }) 
  toArr=Object.entries(objectToArray)
  console.log(toArr);
//2
objectToArray1=({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
toArr1=Object.entries(objectToArray1)
console.log(toArr1)
//3
let student = {
    name: "Mike", 
    class: "4A" ,
    course: "English",
  };
  function arrOfPop(obj){
  return Object.keys(obj)    
  };
  console.log(arrOfPop(student))

console.log("-----------------------------")
  //4
  let first = {firstName: "John"}
let last = {lastName: "Smith"}
function twoObj(obj1,obj2){
    
   let toArr2 =Object.entries(obj2)
    let toArr1=Object.entries(obj1)
    let arrS=toArr1.concat(toArr2)
    return Object.fromEntries(arrS)

}
console.log(twoObj(first,last))
