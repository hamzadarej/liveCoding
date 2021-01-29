//Count characters only
const emptySpaces = (str) => {
  count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") count++;
  }
  return str.length - count;
};
console.log(emptySpaces("hi im"));
console.log("_                       break                   _")
//Need more money
const salaryCalculator = (name, salary, ...kids) => {
  kidsCount = kids.length;
  netto = 0;
  if (kidsCount == 1) {
    netto = salary / 1.3;
  }
  if (kidsCount == 2) {
    netto = salary / 1.25;
  }
  if (kidsCount > 2) {
    netto = salary / 1.2;
  }
  if (kidsCount == 0) {
    netto =salary-salary / 1.55;
  }

  return `${name} has ${kidsCount} kids and a salary of ${netto}`;
};
console.log(salaryCalculator("fabi", 5000, "zain", "uschi"));
console.log(salaryCalculator("Olga", 5000, "Zain"));
console.log(salaryCalculator("jack", 200));
console.log("_                       break                   _")
// call me
console.log(                     );
const callMe = (str) => {
  results = "";
  
if (str.slice(0,3) == "030"||str.slice(0,3)=="017"  ) 
  {results="This is not a valid phone number"}
  if (str.includes(typeof(" ")) && str.length < 10){results=`this is not a valid phone number`}

  //if(!){results=`this is a valid phone number`}
  else {
    results = `this is not a valid phone number ${str}`;
  }

  return results;
};
console.log(callMe("0172844524"));
console.log(callMe("01728b4524"));
console.log(callMe("01728b4524"));
console.log("_                       break                   _")
//IsBank
const bankChecker = (num) => {
  results = " ";
  
  if (num.includes("DE") && num.slice(0, 2) == "DE") {
    results = `the bank account ${num} is valid`;
  } else {
    results = "is not valid bank account";
  }

  if (num.length == 22) {
    results;
  } else {
    results = "There was no bank account in the text";
  }

  return results;
};
console.log(bankChecker("DE12100110013000405011"));
console.log(bankChecker("I delete, have bank DE"));
console.log(bankChecker("Hi, why you need my bank account?"));
console.log("_                       break                   _")
//This is crazy

const checkStr = (strC) => {
  if (strC.includes("Javascript")) {
    strC = "I know its crazy ;)";
  } else {
    strC = "who is Hadi";
  }
  return strC;
};
console.log(checkStr("hi i like Javascript"));
console.log(checkStr("Hi my name is HADI"));
console.log("_                       break                   _")
// Tell me my age
const currentYear = new Date().getFullYear();
const ageC = (age) => {
  age < currentYear ? (results = currentYear - age) : (results = "Please enter a valid year");

  return results;
};

console.log(ageC(2020));
console.log(ageC(1940));
console.log("_                       break                   _")
// Seasons
const monthS =(str)=>{
const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "jun",
  "july",
  "august",
  "september",
  "october",
  "november",
];
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
const currentSe = (monthName)=>{
  switch (months.indexOf(monthName)){
    case 0:
    case 1:
    case 2:
      return seasons[0];
    case 3:
    case 4:
    case 5:
      return seasons[1];
    case 6:
    case 7:
    case 8:
     return seasons[2];
    case 9:
    case 10:
    case 11:
      return seasons[3];
       default :
      return `something went wrong`;
  }};
let month = str

.split(" ")
.filter((word)=> months.includes(word))
.join("")
return month == ""
? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;

};


console.log(monthS("december"));
console.log(monthS("march"));

console.log(monthS("i born in september"));
console.log(monthS("kartafol"));



console.log("_                       break                   _")

//**Student level check**
const studentAverage=(num1)=>{

 // return num1
  //.reduce((acc,curr)=>{return acc+curr/num1.length;},0)
resutlt=0;
  for (let i=0;i<num1.length;i++){
 resutlt+=num1[i]/num1.length;}
 console.log(resutlt)
 

 if(resutlt < 70){resutlta="F"};
 if(resutlt <80 && resutlt >70 ){resutlta="C"};
 if(resutlt >80&& resutlt<85){resutlta="B"};
 if(resutlt<90&&resutlt >85){resutlta="A"};
 if(resutlt>90) {resutlta="A+"}; 
 
  
  return  resutlta
}
  



console.log(studentAverage([99, 44, 44, 80, 80, 98, 89]))
console.log(studentAverage([99, 90, 90, 89, 80, 98, 89]))
console.log("_                       break                   _")
//**Tell me more** 
const userDare=(user,old,adress,...activites)=>{

    if(activites.includes("dance")||activites.includes("party")){
      comm="you are cool"

    }else{comm=""}

  return `hey ${user} you are ${old} any you live in ${adress} oh you like ${activites} ,${comm}`
}
console.log(userDare("hamza",25,"leipzig","swimming"))
console.log(userDare("Zain", 22, "Kurfürstendamm", "dance", "party"));
console.log(userDare("Olga", 40, "potsdamer platz", "party"));

console.log("_                       break                   _")
//**Validate Email**
const validate =(val)=>{
let charA ;
let charD ;
for (let i=0;i<val.length;i++){
  if(val[i]===("@")){charA=i;}
  if(val[i]===(".")){charD=i;}
  }
  if(charA >0 && charD >charA){
    return `${val} is valid.`;
  }else{
    return `${val} is invalid`
  }

 }
 console.log(validate("hamza@gmail.com"))