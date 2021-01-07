// function
let party = 20 ;
party >= 18 ? console.log("go to party"):console.log("stay at home");

function add (name,age){
if (age > 20) {return name+' ist erwachene';}
else{return name+" ist noch young"}
}
console.log(add("hamza",27));
console.log(add("anis",19))
// + its addition for numbers and for string and value add's the nummber whehe you want to put it
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
//1
let v1 = 27 ;
let s1 = "Hi, my name is Hamza and I am ";
console.log(s1+v1);
console.log(`${s1}${v1}`);
// the "+" operator is combain the string and the number.
//Math.ramdom you get a number between 0 and 1
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1); 
//+ 1 to get a number between 1-10 without "+1" to get a number between 0-9

//1== 1 -> true 
// 1! =44 -> true we use == or =! to compare two value the results (true ,false)
console.log(1 ==1);
console.log(1!=2);
console.log(1 == 1 && 1 == 10);
console.log(1 == 1) || 2==1 ;
// && = and , || = or 
console.log ( 2==2 || 20==10|| 70==60 ); //the result will be true because one of them are true

let bool1,bool2,bool3;
bool1=true;
bool2=false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");
// === ==
let mum1 = "10";
let mum2 = 10;
console.log(mum1==mum2 ? "cool":"not cool");// == to compare just the value
console.log(mum1===mum2 ? "cool":"not cool");// === to compare the value and the type of it 
//1 = true 
// 0 = false
//""=false
// ""=,"h"=true
// false =false 
// null =false
console.log(null ? "yeah": "noo");
//Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random()*6)+1);



// Math.sqrt()  its give you the square root of the number for ex sqrt(81) its give you 9 if you multiply the number 9 by itself = 81
console.log(Math.sqrt(9)) 
console.log(Math.sqrt(100))
console.log(Math.sqrt(81))

console.log(Math.sqrt(-1))// the sqrt of a negative number returns NaN








