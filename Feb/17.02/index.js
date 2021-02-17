let userName="";
try{
   // cool();
    if (userName =="")throw "sorry enter a valid name"
}
catch(err){
    console.log("there was an error :"+err);
}
finally {
   console.log("i will run anyway ");}


//Balanced Words
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

function balanced(str){

let strFirstAndSecond=(alphabet.indexOf(str.slice(0,1)))+(alphabet.indexOf(str.slice(1,2)))
let strLastAndBeforeLast=(alphabet.indexOf(str[str.length -2]))+(alphabet.indexOf(str[str.length -1]))
return strFirstAndSecond==strLastAndBeforeLast;
    
}
console.log(balanced("zips"))
console.log(balanced("brake"))
function balanced1(str){

    return str.split().map((a)=>alphabet.indexOf(a[0])+alphabet.indexOf(a[1])==alphabet.indexOf(a[a.length -1])+alphabet.indexOf(a[a.length -2])).join();
}
console.log(balanced1("zips"));
console.log(balanced1("brake"));
//Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
const getHashTags=str=>{return str.split(" ").sort((a,b)=>b.length-a.length).slice(0,3).map((a)=>"#"+a)};
    
console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
console.log(getHashTags("Visualizing Science"));



function isSet(cards) {
    return cards.map((a)=>a.color=="green")
	
}
console.log(isSet([
    { color: "green", number: 1, shade: "empty", shape: "squiggle" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
    { color: "green", number: 3, shade: "empty", shape: "oval" }
  ]))
  
  function espVerb(verb) {
      let NoConj=verb.slice(0,-2)
     if(verb.slice(-2)=="ar"||verb.slice(-2)=="er"||verb.slice(-2)=="ir"){results=`"Yo ${NoConj}o,tú ${NoConj}es, él ${NoConj}e"`}else{results="this is not a regular spanish verb"}
    
     return results
}
console.log(espVerb("pasar"))
console.log(espVerb("unir"))
console.log(espVerb("corre"))
//Create a RegExp myRegExp to test if a string is a valid pin or not.

//A valid pin has:

//Exactly 4 or 6 characters.
//Only numerical characters (0-9).
//No whitespace.
const myRegExp = new RegExp( /^(\d{4})?(\d{6})?$/)
console.log(myRegExp.test("4569"))
console.log(myRegExp.test("41h9"))
console.log(myRegExp.test("456987"))
//Regular Expression
var str="i love we deVL abcde";
let result=str.replace(/[a-e]/ig,"@");//i =case insensitive low/upper case//g=Global all the char//^=reverse ,do the opposite like ! we can use it just in the [^l].
console.log(result)
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
console.log(res)