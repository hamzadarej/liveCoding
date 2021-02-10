const car ={
    brandName:"audi",
    modelYear:2020,
    priseWithVat:20,
    colors:["orange","black","white"]
};
// shallow clone for an object using { ...obj}
const newCloneObj={...car};
console.log(newCloneObj)
console.log("------------------------------------------------------------------")
newCloneObj.brandName="BmW";
newCloneObj.colors[0]="yellow";
console.log(car)//the color its changed but brandName still the same thats mean we can use shallow clone only in simple obj 
console.log(newCloneObj) //
 // Recursion
 // factorial example
 const factorial =(num)=>{
     if(num==1){return 1;}
     return num * factorial(num-1)

 }
 console.log(factorial(7))
// 7*6 = *5  = *4 = *3 = *2 = *1


//deepCopy
function deepCopy(obj){
    if(typeof obj =="object"){
    return Object.keys(obj)
    .map((key)=>({[key]:deepCopy(obj[key])}))
    .reduce((acc,cur)=>Object.assign(acc,cur),{});


}
return obj;

}

console.log(deepCopy(car))
console.log("------------------------------------------------------------------")

//// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
const scores =[ 
    { tile: "N", score: 1 },
     { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
     { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 } ,]


const scabble=(Array)=>{

const arrReduce=Array.reduce((acc,cur)=>acc+cur.score,0)
return arrReduce;
}
console.log(scabble(scores));
console.log("------------------------------------------------------------------")
//
 let first = {firstName: "John"}
 let last = {lastName: "Smith"}

 //4 other solution
 const makeItIntoOne=(obj1,obj2)=>{
   return Object.assign(obj1,obj2)
 }
 console.log(makeItIntoOne(first,last))
 console.log("------------------------------------------------------------------")

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}



let person ={name:"John",job:"teacher"}


const SwitchKeys=(obj)=>{
let newObj={};
for(let prop in obj){
    newObj[obj[prop]]=prop;
}
return newObj

}
console.log(SwitchKeys(person))
console.log("------------------------------------------------------------------")
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]

const keyAndValue=(obj)=>{
const objK=Object.keys(obj);
const objV=Object.values(obj);
return [objV,objK]
}
console.log(keyAndValue({ a: 1, b: 2, c: 3 }))
console.log("------------------------------------------------------------------")