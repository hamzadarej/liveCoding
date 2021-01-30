const emptySpaces =(str)=>{

    let count=0;
    let results;
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){count++}
    }
    return results=str.length-count
}
console.log(emptySpaces("Hi      ai"))

console.log("    ---------------------         break        --------------               ")



const salaryC=(name,salary,...kids)=>{
    let netto=0;
    let results;
    if(kids.length==0){netto=salary-salary*0.55}
    if(kids.length==1){netto=salary-salary*0.30}
    if(kids.length==2){netto=salary-salary*0.25}
    if(kids.length>2){netto=salary-salary*0.20}
    
    return results=`${name} his/her Salary netto is ${netto} and have ${kids.length} kids`
}
console.log(salaryC("anis", 5000, ))
console.log(salaryC("ahmed", 5000, "Zain"))
console.log(salaryC("salim", 5000, "Zain", "Uschi"))
console.log(salaryC("emir", 5000, "Zain", "Uschi","emir"))

console.log("    ---------------------         break        --------------               ")
const phone=(num)=>{
    let numberToCheck=num
    .split(" ")
    .find(
        (number)=>number.slice(0,3) == "030" || number.slice(0,3)=="017"
    );
    if(numberToCheck== undefined){
        return `sorry, please enter your phone number.`;
    }
    if(numberToCheck.length==10 && numberToCheck==parseInt(numberToCheck)){
        return `your phone number is ${numberToCheck}`
    }else{
        return `this is not valid phone number ${numberToCheck}`
    }
    
}
console.log(phone("Hi, call me on 0300022398 "))
console.log(phone("Hi, call me on 017p022398 "))
console.log(phone("Hi, call me on 0500022398 "))
console.log("    ---------------------         break        --------------               ")


// isbank

const isBank=(num)=>{

    let bankChecker = num
    .split(" ")
    .find((bank)=>bank.slice(0,2)=="DE"&& bank.length == 22 && bank.slice(3,22)==parseInt(bank.slice(3,22)))
    if(bankChecker==undefined){return `this is not valid phone number`}
    return `this is valid phone number ${bankChecker}`
}
console.log(isBank("this is DE12100110013000450011"))
console.log("    ---------------------         break        --------------               ")



// this is crazy

const checkStr=(str)=>{
    let javaS=str
    .toLowerCase()
    .split(" ")
    
    .find((i)=>i=="javascript")
    if(javaS==undefined){return`i don't know about it`}
    return `I know its crazy i love ${javaS}`
}
console.log(checkStr("i like jAvascript"))
console.log("    ---------------------         break        --------------               ")


//   Seasons
const cheackMonth=(str)=>{
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
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
    "november"
  ];
 
  
  let findIt= months
  .find((month)=>month==(str.split(" ").find((m)=>m==month)))
let season;
 if(findIt==undefined){return`I couldn’t find any month in your text, sorry try again`}
  
  
  currentS=months.indexOf(findIt)
  if(currentS <3){season=seasons[0]}
  if(currentS >=3&& currentS <6){season=seasons[1]}
  if(currentS >=6 && currentS<9){season=seasons[2]}
  if(currentS >=9 && currentS<12){season=seasons[3]}

 
  
 return ` ${findIt} is in ${season} `

  
}
console.log(cheackMonth("im in december"))
console.log(cheackMonth("i  love march"))
console.log(cheackMonth("im in september"))
console.log("    ---------------------         break        --------------               ")


  // the months includes "r"

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
    "november"
  ];
  let monthsR=months
  .filter((month)=>month.includes("r"))
  console.log(monthsR.join(" "))
  console.log("    ---------------------         break        --------------               ")

  // the even number
  const num =[3,5,6,9,2,6,4,77]

  let evenN = num
  .filter((even)=>even%2 ==0)
  console.log(evenN)
  console.log("    ---------------------         break        --------------               ")

  // the companies starting after 1990 and the companies category =="Retail"

  const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  let retailC =companies.filter((str)=>str.category=="Retail")
  console.log(retailC)
  console.log("    ---------------------         break        --------------               ")
 let ageC =companies.filter((num)=>num.start> 1990)
  console.log(ageC)
  console.log("    ---------------------         break        --------------               ")
let testMap = companies.map((company)=>`the is ${company.category} company is ${company.end-company.start} years old`)
console.log(testMap)

  //between 18 and 30

  const ages =[28,22,15,16,17,45,33,26,19]
  let olderThan = ages
  .filter((num)=>num>18&&num<30)
  console.log(olderThan)

  let numMap=ages.map((num)=>Math.sqrt(num)).map((num)=>Math.ceil(num))
  console.log(numMap)
  // Validate Email  

  const valid =(str)=>{
      let empty="-";
      let isValid =str.
      split(" ")
      .find((str)=>(str.includes("@",".") && str[0] !=="@" && str.indexOf(".") >str.indexOf("@")))
      if(isValid==undefined){return `sorry,invalid email address`}
      return `this is valid email adress thank you : ${str}`
  }
  console.log(valid("this is my email darejhamza@gmail.com"))
  console.log(valid("contact@hadi-nsreeny.com"))
  console.log(valid("@hadi-nsreeny.com"))