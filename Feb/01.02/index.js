// functions inside functions
function main(num1, num2) {
  function second(n) {
    return n * n;
  }
  return second(num1) + second(num2);
}
console.log(main(3, 4));

// Nested scopes
let cool = true; //global variable
const outerFunction = (x, y) => {
  let big = true;    //function scope
  const innerFunction = (num) => {
    return num / 2;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(6, 8));
// invoking == calling
// functions that return other function
const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
console.log(add());
console.log(add());
//example
const check = (() => {
  let x = [" is cool one"];
  return () => {
    x.unshift(" javascript ");
    return x.join("");
  };
})();
console.log(check());
console.log(check());
// SIAF
// self-invoking anonymous function

/*(function (){
    console.log("hi");

})();
(()=>{
    console.log("hi");l
})();*/
//IIFE
// Immediately-invoked Function Expression
const sum = ((x, y) => {
  return x + y;
})(3, 4);
console.log(sum); 

// write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add(2)(3)

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add2(2)(5));

// write a function multiplier that uses a closure to perform multiplication.However,the outer function should be stored in a variable which is then called

function multiplier(num) {
  return (x) => x * num; //=> closure for the innerFunction
}
const times = multiplier(2)(5);
console.log(times);

//Ex
var all = 3;
(() => {
  let all = "hey";
  console.log(all); //=> hey because its inside
})();
console.log(all); //=> 3 because is outside of the function
console.log("break");
//
const retired = ((age, retirementAge, salary, percentage) => {
  if (age >= retirementAge) {
    console.log("you are already retired");
  } else {
    let yearsTosave = retirementAge - age;
    console.log(
      `you are going to work more ${yearsTosave} years till you retired`
    );
    let monthToSave = (salary * percentage) / 100;
    console.log(`you are going to save ${monthToSave} monthly`);
    let tillRetiredSave = yearsTosave * (monthToSave * 12);
    console.log(
      `you will have money saved ${tillRetiredSave} till you are ${retirementAge}`
    );
  }
})(30, 65, 4000, 5);
console.log(retired);
console.log("_                       break                   _");
// trim
const emptySpaces = (str) => {
  count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") count++;
  }
  return str.length - count;
};
console.log(emptySpaces("hi im"));
console.log("_                       break                   _");

const emptyS = (str) => {
  return (str = str.trim().length);
};
console.log(emptyS("hi im")); // => trim don't ignore the emptyspace
//trim
let str = "   hi ";
console.log(str.trim()); //=>to ignore the emptyspace
//trimEnd(),trimStart()

//startWith() && endswith
let text = "hey its me.";
console.log(text.startsWith("h")); //=>true
console.log(text.endsWith("."));
console.log("_                       break                   _");
// charAt
let chr = "@";
console.log(chr.charAt(0)); //=>i
console.log(chr[0]); //=>i
const ages = [28, 22, 15, 16, 17, 45, 33, 26, 19];
console.log(ages[0]);
console.log("_                       break                   _");
// charCodeAt()
console.log(chr.charCodeAt(0)); //=>a =97
// @=64

/// short way
const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  

  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  const currM = seasons[Math.floor(months.indexOf(month) / 3)];
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currM} `;
};
console.log(monthCheck("I love june"));
console.log(monthCheck("We need marcH"));
console.log(monthCheck("I love october"));

let num = 5.49;
console.log(isNaN(num)); //=> is not Number=true or false
console.log(typeof num); //=>  number or string3

console.log(Math.random(num * 100));
console.log(Math.round(num))
console.log(Math.sign(num))//=> return 1 as positive/-1 as negative


//
const monthF=(str)=>{
let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let seaseon = str
  .split(" ")
  .filter((m)=>months.includes(m))
  .join(" ")
return seasons[Math.floor(months.indexOf(seaseon)/3)]
}
console.log(monthF("this is january"))
//                   scope

foo=()=>{
 //var 
  a=45;

}
foo()
console.log(a);

