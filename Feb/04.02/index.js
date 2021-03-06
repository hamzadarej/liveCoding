//object.seal()
const objectUser = {
  name: "hamza",
  age: 22,
};
console.log(objectUser);
Object.seal(objectUser); //you can just modify(key,value) add und delete is impossible
objectUser.address = "Leipzig"; //not working because i used .seal to secure it
objectUser.age = 27; //its work
console.log(objectUser);

const hamzaData = {
  name: "hamza",
  age: 27,
  kids: [
    { name: "chaima", age: 18 },
    { name: "emna", age: 22 },
  ],
};
console.log(hamzaData.kids[0].name); //chaima

const scoreT = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const sumTotal = (arr) => {
  return arr.reduce((a, m) => a + m.score, 0);
};
console.log(sumTotal(scoreT));

//3
const emptyObj = (obj) => {
  return Object.keys(obj).length == 0;
};
console.log(emptyObj({ 4: 6 }));
console.log(emptyObj({}));
console.log("------------------------");
//Free Shipping
const freeShipping = (obj) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, 0) > 50;
};

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

//
//programing Object
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],

  isChallenging: true,

  isRewarding: true,

  difficulty: 8,

  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("go");
console.log(programming.languages);
//Change the difficulty to the value of 7.
programming.difficulty = 7;

console.log(programming.difficulty);
// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

console.log(programming);
//Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);
console.log("-------------------------");

//Using a loop, iterate through the languages array and console.log all of the languages.
let lang = programming.languages; //reference
for (let prop in lang) {
  console.log(lang[prop]);
}
console.log("-------------------------");
//- Using a loop, console.log all of the keys in the programming object.
let myKeys = Object.keys(programming);
for (let key of myKeys) {
  console.log(key);
} //in this case if we use let in we get the position 0,1,2,3,4
console.log("-------------------------");
// Using a loop, console.log all of the values in the programming object.
let values = Object.values(programming);
for (let val of values) {
  console.log(val);
}

//- Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
Object.seal(programming);

/*
> Create a function that returns an object has following output.

Examples:

 ABC  -> { A: 1, B: 1, C: 1 }
 QQQ -> { Q: 3} */
console.log("-------------------------");
const countCH = (str) => {
  result = {};
  for (let i = 0; i < str.length; i++) {
    const strI = str[i];
    if (!result[strI]) {
      result[strI] = 0;
    }
    result[strI]++;
  }

  return result;
};
console.log(countCH("qqqaq"));
console.log(countCH("abc"));

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac(“14-02-2002”)  -> Aquarius
// zodiac(“10-06-1984")  -> Gemini (edited)

const signs = [
  { name: "Aries", start: "22-03", end: "20-04" },
  { name: "Taurus", start: "20-04", end: "21-05" },
  { name: "Gemini", start: "21-05", end: "21-06" },
  { name: "Cancer", start: "21-06", end: "23-07" },
  { name: "Leo", start: "23-07", end: "23-08" },
  { name: "Virgo", start: "23-08", end: "23-09" },
  { name: "Libra", start: "23-09", end: "23-10" },
  { name: "Scorpio", start: "23-10", end: "22-11" },
  { name: "Sagittarius", start: "23-11", end: "22-12" },
  { name: "Capricorn", start: "22-12", end: "20-01" },
  { name: "Aquarius", start: "20-01", end: "19-02" },
  { name: "Pisces", start: "19-02", end: "21-03" },
];
console.log("------------zzz-------------");
const zodiac = (str) => {
  var dateCounter = parseInt(str.slice(0, 2)) + parseInt(str.slice(3, 5)) * 30;
  const date = signs.filter(
    (a) =>
      parseInt(a.start.slice(0, 2)) + parseInt(a.start.slice(3, 5) * 30) <=
        dateCounter &&
      parseInt(a.end.slice(0, 2)) + parseInt(a.end.slice(3, 5) * 30) >=
        dateCounter
  );

  return date[0]["name"];
};
console.log(zodiac("27-10"));
console.log(zodiac("17.09"));
console.log(zodiac("27-07-1992"));






