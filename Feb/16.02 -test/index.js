// Answer Sheet - all answers should go here 
//1
const profileData={
    name:"Hamza",
    surname:"Darej",
    age:27,
    city:"leipzig",
}
//2
function convertObjectToArray(obj) {

    return Object.entries(obj)
}
console.log(convertObjectToArray(profileData))

//convertArrayData
function convertArrayData(arr) {
    let deleteLast = arr.pop()
    let arrReverse=arr.reverse()
let newArr =arr.push("Milk")

    return arrReverse
}
console.log(convertArrayData(["coffee", "tea", "juice"]))

//3. Word Converter
function wordConverter(arr) {

    let newArr=arr.map((a)=>a+"er")
    return newArr
    
}
console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"]))

//4. Hour Calculation
const hourTracking = [
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 }
  ];

function calculateHours(arr){
    
let newArr=arr.map((time)=>time.end-time.start)
return newArr.reduce((acc,cur)=>acc+cur,0)
}
console.log(calculateHours(hourTracking))

//Classes
class Course{
    constructor(_teacher,_learnM,_studentsNumber){

this.teacher=_teacher;
this.learnM=_learnM;
this.studentsNumber=_studentsNumber;
}
spaceNeeded(){
    console.log(`the classroom should be ${this.studentsNumber*2}m².`)
}
details(){
    console.log( `this is a web development course taught by ${this.teacher}. There are ${this.studentsNumber} students taking this course.`)
}
}
const dciCourse=new Course("Zain","Web development",10);
console.log(dciCourse)
dciCourse.spaceNeeded()
dciCourse.details();

//Problem Solving
//1. Format your string

function capitalizeFirstLetter(str) {
     let strS=str.split(" ");
    let strMap= strS.map((a)=>a.slice(0,1).toUpperCase()+a.slice(1));
    return strMap.join()
}

console.log(capitalizeFirstLetter("hey there"))
console.log(capitalizeFirstLetter("the quick brown fox "))

//2. Validation
function validPin(pin) {
let result;
let counter=0;
let sum=pin.split("").reduce((el,a)=>parseInt(el) +parseInt(a))
for(let i=0;i<pin.length;i++){
  
 if(parseFloat(pin).toString().length==4&&sum>=5)
 {result=true;}else{result= false}
    
    if(pin[i]==pin[i+1]){counter++ }
   if(counter>2){return false}
 
}
return result
    
}
console.log(validPin("165p"))
console.log(validPin("5545"))
console.log(validPin("1112"))
console.log(validPin("6p"))














// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
// module.exports = {profileData, convertObjectToArray, convertArrayData, convertArraysToObject, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};
