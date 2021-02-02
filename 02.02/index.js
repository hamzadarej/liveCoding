//objects
//key ,properties : value
//object literal
const obj = {
    name1:"hadi",
    name2:"olga",
    name3:"zain",
}
const userObj ={
    name:"hamza",
    lastName :"dr",
    age:27,
    add:"xxx str"
    //actY: ["draw", "sleep", "eat"],
}
userObj.hobby="swimming,cooking,traveling"
console.log(obj.name1)
console.log(typeof userObj.age)
console.log(userObj['lastName'])
// Accessing properties
// 1-with (bracket notation)
console.log(userObj["age"]);
//2-with (dot notation)
const obj2={};
console.log(typeof obj2)

obj2.name="hamza";
obj2["age"]=28;
console.log(obj2);

const save = new Object();//=>to creat object {}
console.log(save);
const arr = new Array(); // to creat an array
console.log(arr)

// cool for 
for (let prop in userObj){
    console.log(prop +":" + userObj[prop])
}
 

//
const person={
//  keys / values
    name:"hamza",
    age:27,
    gender:"male",
    birthYear:1993,
    hight:185,
    print:function(){
        console.log(`I am ${this.name} I'm ${this.age} years old`)
    },
    old:function(){
        return 2021 -this.birthYear
    }
}
person.print()
console.log(person.old())
// object.keys
console.log(Object.keys(person))
//object.values
console.log(Object.values(person))
// object.assign
const obj3={kids:2,cars:400};
const obj4={colors:["red","gray","black"],pet:"dog"};
const totalObj = Object.assign({name:"hamza"},obj3,obj4);
console.log(totalObj)

//object.defineProperty
const newObj ={};
Object.defineProperty(newObj,"bike",{value:22,writable:false,});
console.log(newObj.bike)

//object.defineProperties()
Object.defineProperties(newObj,{

p1:{value:"cool,writable:true,"}



})

// ex // Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
const person2={
car:"bmw",
handy:"iphone",
age:25,

}
for(let i in person2){
    console.log(`${person2[i]}`)
}

// 2 // Create a function that returns an array of the properties of a javascript object.

/*Given the following object
const student = { 
firstName: "Zain", 
lastName: "Oil", 
class: 48 };*/
const person3={
    car:"bmw",
    handy:"iphone",
    age:25,
    print:function(){
        
        return console.log(new Array(Object.keys(person3)))
    },
    
    };
    person3.print()

    //3 //Create a method that prints the following:
//"Zain Oil a student in class 48"
    
    const student = { 
        firstName: "Zain", 
        lastName: "Oil", 
        class: 48 ,
        print:function(){
             return console.log(`${this.firstName} ${this.lastName} a student in class ${this.class}`)
         }};

         student.print()
console.log("break")
     /*Get Values. Create a function that returns an array of all values of an object’s properties.
Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"] */
       const getObjectValues={
            choice1: "tea",
            choice2: "coffee",
            choice3: "milk"
          }
         const objectV =(obj)=>{
             return Object.values(obj)
         }
console.log(objectV(getObjectValues))
//List Properties. Create a function that returns an array of properties of a javascript object.
//Example
let students = {
  name: "Mike", 
  class: "4A" ,
  course: "English",
}
/*Expected output:
["name", "class", "course"]*/
const listProp =(obj)=>{
    return Object.keys(obj)
}
console.log(listProp(students))



    
    



