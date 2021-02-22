const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

function calculateHours(arr) {
  return arr.reduce((acc, cur) => acc + (cur.end - cur.start), 0);
}
console.log(calculateHours(hourTracking));
//
function capitalizeFirstLetter(str) {
  let strS = str.split(" ");
  let strMap = strS.map(
    (a) => a.slice(0, 1).toUpperCase() + a.slice(1).toLowerCase()
  );
  return strMap.join(" ");
}

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter("the quick brown fox "));
//Positive Dominant
//An array is positive dominant if it contains strictly more unique positive values than unique negative values.
//Write a function that returns true if an array is positive dominant.
function isPositiveDominant(a) {
  uniqueCounter = 0;
  noDupp = new Set(a);

  let arr = [...noDupp];

  return arr.filter((a) => 0 > a).length < arr.filter((a) => 0 < a).length;
}
console.log(isPositiveDominant([1, 1, 1, -3, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));

function validPin(pin) {
  let result;
  let counter = 0;
  let sum = pin.split("").reduce((el, a) => parseInt(el) + parseInt(a));
  for (i = 0; i < pin.length; i++) {
    if (pin[i] == pin[i + 1]) {
      counter++;
    }
  }
  result = pin
    .split()
    .map(
      (a) =>
        a.length == 4 &&
        a[a.length - 1] % 2 == 0 &&
        parseInt(a) == a &&
        sum >= 5 &&
        counter <= 2
    );
  return result.join();
}
console.log(validPin("1624"));
console.log(validPin("5p46"));
console.log(validPin("4446"));

const num = [2, 5, 6, 9, 8, 7, 12];
const numR = num.reduce((acc, elm) => acc + elm, 0);
console.log(numR);
console.log("galip");
const str = "i want to be millionar";
const strM = str.split(" ").map((a) => a[0].toLocaleUpperCase() + a.slice(1));
console.log(strM);
function sumar(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result = +arr[i];
    }
  }

  return result;
}
console.log(sumar([1, 2, 5, 6]));

function areaOfCountry(name, area) {
  var porzentCount = ((area / 148940000) * 100).toFixed(2);
  return `"${name} is ${porzentCount}% of the total world's landmass"`;
}
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Tunisie", 1181861));

function addName(obj, name, value) {
  let newObj = new Object();
  newObj[name] = value;
  return Object.entries(obj, newObj);
}
//console.log(addName({ piano: 500 }, "Brutus", 400));

function keysAndValues(obj) {
  newArr = new Array();
  newO = Object.entries(obj);
  keyObj = newO.map((a) => a[0]);
  keyValue = newO.map((a) => a[1]);

  newArr.push(keyObj, keyValue);
  return newArr;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//keysAndValues({ a: 1, b: 2, c: 3 })
//➞ [["a", "b", "c"], [1, 2, 3]]
//

function reverseOdd(str) {
  let result;
  let strM = str.split(" ").filter((a)=>a.length%2!==0)
 /* for (let i = 0; i < strM.length; i++) {
    if (strM[i].length % 2 !== 0) {
      result = strM[i].split("").reverse().join("");
    }
  }*/
  function reverse(strM) {
    for(let i=0;i<strM.length;i++){
     return strM[i].split("").reverse().join("");
    }
    
  }

  return strM//result;
}
console.log(reverseOdd("green tea is very"));
