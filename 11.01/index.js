function print (str) {
    console.log(str);

}
const display=(str) => console.log(str);
print("hi");
display("cool");
console.log(typeof print);
const sum = (x,y) => x +y ;
console.log(sum (3,7));
const isBig = (num1,num2) => num1 == num2;
console.log(isBig(33,44))
//declare multiple values in one variable
let namesArr = ["hamza","Salim","anis"];
console.log(namesArr[0]);
const numbers = [2,1,5,9,7,6,4,3];
console.log(numbers[4]);
let Hobbys = ["swimmmen","waterski","cooking","cooding","travling","chillen"]
console.log(Hobbys[4]);

// loops
// i=0 length = 3 
for(let i=0; i <= Hobbys.length ; i++)
{console.log(Hobbys[i])}

for (let i = 0 ; i<=10 ; i++)console.log(i);
const Arr = ["a","b","c"];
//index
for (let i =0; i < Arr.length; i++){console.log(Arr[i].toUpperCase());}
const names = ["caro","anis"];
// names[0][0]
for (let i= 0; i < names.length; i++){
    console.log(names[0])
}
let friends = ["bilel","hmaida","lotfi","dali"];
for (let i=0 ; i < friends.length ; i++){console.log(friends[i][0].toUpperCase()+friends[i].slice(1));}

let isSmart = false ;
if (isSmart){console.log("cool");
}else {console.log("nooo");}

let count = 0;
if (22*3 == 299+3){count++;
console.log("you are right");}
else {count--;
console.log("not that's a new line")}
// functions,if else,objects,scopes all with {}
//arrays,strings[]
// if conditions,method,conditions function call ()
let a = true; 
let b =false ;
c = 11==23;

if ((a==b && c !=a)|| c ==a){console.log("waw");}else {console.log("i don't know what you need from me");}

// split & join
let st = "hi im hamza";
let stTO = st.split("");
console.log(stTO);
let backTo = stTO.join(" ");
console.log(backTo);






