// function
let party = 20 ;
party >= 18 ? console.log("go to party"):console.log("stay at home");

function add (name,age){
if (age > 20) {return name+' ist erwachene';}
else{return name+" ist noch young"}
}
console.log(add("hamza",27));
console.log(add("anis",19))
// + its addition for numbers and for string and value add's the nummber where you want to put it
//2 
let v2 = "10.05";
let v3 ="11.05";
let v21 = parseInt(v2);
console.log(v21)

console.log(parseFloat(v2));
console.log(+v3);
// number + String
let d ,f ,r;
d = "HI";
f = 33;
console.log(d +f);
// number + boolean 
r = true ; // true =1, false = 0
console.log(f+r);// 33 +1 =34

// string +string 
let str1 = "hey";
let str2 = " I am hamza";
console.log(str1+str2);
// ++ --
let a = 3;
console.log(a++);
console.log(a);
// typeof
console.log(typeof str1);
console.log(typeof a);
console.log(typeof console.log);
console.log(typeof Math);
// 4.55555555555
// (0,1*0,2)
let Num1 = 0.1;
let Num2 = 0.2;
let result = Num1+Num2;
console.log(result)
//toFixed()how many number you wanna have after the ,
let num4=3;
console.log(result.toFixed(num4))
