console.log ("hamza");
console.log ("I love leipzig");
console.log (3*9);

console.log (12 == 4*3);
var name = "hamza";
let boo = 1 < 0.5;
console.log (boo);
let sum = 5*2 ;
console.log (sum);
var num = 5;
console.log(++ num)

let naMe = "hamza";
console.log(naMe.length);
console.log(naMe[1]);
const fatherName = "chaabene";
console.log(fatherName)

var global = "hi I am global";
{
    let Local = 22;
    global ="HI";
    var localGlob = "hi it's me";

}
console.log(localGlob);
// function
function print (str)
{
    console.log(str);
}
print("hamza");
print(27);
print(33);

let ostring = "hi my name is hamza im from tunisia";
print(ostring.length);
let str1 = ostring.substring(3);
console.log(str1);
let str2 = ostring.substring(28,35);
console.log(str2);
let str3 = ostring.toUpperCase();
console.log(str3);
let str4 = ostring.toLowerCase();
console.log(str4);

let firstN ="hAmZa";
console.log(firstN);
let f1 = firstN.substring(1);
console.log(f1);
let f2 = firstN.toUpperCase();
console.log(f2);
let f3 = firstN.toLowerCase();
console.log(f3);

let shortForm =
firstN[0].toUpperCase() + firstN.substring(1).toLowerCase();
console.log(shortForm);


let longStr = "hi i live in leipzig since 3 years";
let text = longStr.includes("hi")
let text2 = longStr.includes("3")
console.log(text);
console.log(text2);

//exercice

let it = "I can walk in the park all day !";
console.log(it.substring(18,22))
let it1 = "Hello world";
console.log(it1.toUpperCase());
let it2 = "Earthlings";
console.log(it2.toLowerCase());
let it3 = "JavaScript";
console.log(it3.substring(3,6));
let it4 = "nice shoes";
let it5 = it4.includes("l")
console.log(it5)
let it6 = "J";
console.log(it6+it3+it6);

//substring 
let longtext ="This is a long text";
console.log(longtext.substring(longtext.length-4));
// slice 
let slicestr = longtext.slice(-9);
console.log(slicestr)
//``
let firstusername = "hazem";
let lastusername = "something";
let add = "dantastr,04155 leipzig";
console.log("hi I am " + firstusername+",I live in "+add +".my last name " + lastusername+ ".")
console.log(`Hi I am ${firstusername}, I live in leipzig ${add}. My last name is ${lastusername}.`);
//funktion
let q = 10
q--;
--q;
console.log(q);
let w = 10
w++;
++w ;
console.log(w);
// Ex7
let sTr = "very nice home";
let sTr1 = " sweet ";
console.log(sTr.slice(-4)+sTr1+sTr.slice(-4));
// Ex8
let vAr1 = "I learn javascript in "
let year = 2021;
let newstR=vAr1+year
console.log(newstR.toUpperCase);
console.log(newstR.includes("java"));
newstR.includes("java") ? console.log ("jaa"):console.log("shade");
// Ex9
let sT1 = "javaScript";
let st2 = sT1.substring(1)+sT1[0];
console.log(st2);
// Ex10
let myName = "salim";
let myAdd = "leipzig";
let myJob = "student";
let aboutme = `my Name is ${myName}, I live in ${myAdd}, and I am a ${myJob}.`
console.log(aboutme)
//Ex11
let foxStr ="The quick brown fox";
let foxStr1 = foxStr[0].toLowerCase() + foxStr.substring(1);
console.log(foxStr1);


















