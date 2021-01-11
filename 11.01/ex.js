//Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
text= "";
for (let i = 0 ; i<=10 ; i++){
    if (i % 2== 0)
{text += i + " ";
}}
console.log(text);
console.log("--------");
// 9 8 7 6 5 4 3 2 1 0

text = "";
for (let i = 9; i >= 0; i--) {
    text += i + " ";}

    console.log(text);
    
    
console.log("--------");
// 111222333444
text = "";
for(let i = 1; i <= 4;i++){
    for (let j = 0 ; j< 3;j++){text += i + " ";}
}
console.log(text);
console.log("------");
// 100 200 300 400 500 600 700 
text = "";
for (let d = 100; d <=1000 ; d += 100 ){
    text += d + " ";
}
console.log(text);
console.log("------")
// 1 1 1 2 2 2 333 444
text="";
for(let i =1 ;i <= 4; i++){
    for(let s = 0 ; s<3;s++){text += i + " "}
}console.log(text +"before last1");
// 7 14 21 28 35 42 49

    text="";

    i=7
    for (let j = 1; j <= 7; j++) {
      console.log(`${i * j}`);
    }
    console.log;
    // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
    text="";
for(let i =0 ;i <= 2; i++){
    for(let i = 0 ; i<= 4;i++){text += i + " "}
}console.log(text);
// 1111 2222 4444 
let countNum = 0;
text= "";
for (let i = 1; i <= 4;){
    text += i + " ";
if (countNum !== 0 && countNum % 3 === 0){i++;
countNum = 0;
}
countNum++;
}
console.log(text);
//the porcent % give the rest of the divation operation 24/7=3
console.log(24%7)
// the exlamation mark reverses the logic
a = !5>3 
console.log(a)

// Array 
let fruits = ["apple","banana"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length- 1])
fruits.forEach(function(item,index,array) {
    console.log(item,index);
})
let newFruits = fruits.push("orange")
console.log(fruits);
let last = fruits.pop();
console.log(fruits);
let first = fruits.shift()
console.log(fruits)
let newF = fruits.unshift("strawberry");
console.log(fruits)
fruits.push("mango");
let pos = fruits.indexOf("banana");
console.log(pos)
console.log(fruits);
let removed = fruits.splice(pos, 1)
console.log(fruits);
// 
let vegetables = ["karot","kurbis","paprika","gurker"];
let poss = 1 ;
let n = 2;
let removedItems = vegetables.splice(poss,n);
console.log(vegetables);
console.log(removedItems);