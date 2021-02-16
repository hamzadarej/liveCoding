/*class person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printDate() {
    return `${this.name} ${this.age}`;
  }
}
const newBuddy = new person("hamza", 27);
console.log(newBuddy.printDate());
class kid extends person {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `this is ${this.name} and he is ${this.age} years old and his tall is ${this.height}`;
  }
}
const hamza = new kid("elyas", 2, 125);
console.log(hamza.show());

(function () {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  console.log(`${day}-${month}-${year}\n${hour}:${minute}`);
  console.log(today);
})();
console.log("----------------");
function getDays(date1, date2) {
  firstDate = new Date(date1);
  secondDate = new Date(date2);
  return secondDate;
}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.


function isPandigital(num) {
    let numtoArr = num.toString().split("").sort();
    let arrNoDupp = numtoArr.filter((el, i) => numtoArr.indexOf(el) == i);
    return arrNoDupp.join("")=="0123456789";
  }
  console.log(isPandigital(98140723568910));
  console.log(isPandigital(90864523148909));
  console.log(isPandigital(12233445578899));

//Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.
/*combinations(2, 3) ➞ 6

//combinations(3, 7, 4) ➞ 84

//combinations(2, 3, 4, 5) ➞ 120


function combinations(...items) {
   
 let result=[];
 for(let i=0;i<items.length;i++){
 if(items[i]!==0){
     result.push(items[i])
 }

}
return result.reduce((p,cur)=>{return p*cur;});
  
}
console.log(combinations(3,0,4));
console.log(combinations(2, 3, 4, 5));
console.log("----------------------")


function getTotalPrice(groceries) {
	let groFilter=groceries.map((el)=>el.quantity*el.price)
  let resultD=groFilter.reduce((el,i)=>el+i).toFixed(1)
  return parseFloat(resultD)
}
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]))
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]))
console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]))

function convert(deg) {
	let parDeg=parseFloat(deg)
 let cCaluc=((parDeg-32)*5/9).toFixed()
  let fCalcul=((parDeg*9)/5+32).toFixed()
  if(deg.endsWith("F")&&cCaluc<350){result=`${cCaluc}°C`}
  if(deg.endsWith("C")){result=`${fCalcul}°F`}
  else{"Error"}
  
  

return result
}

console.log(convert("35°C"))
console.log(convert("19°F"))


function chosenWine(wines) {

  const wh =wines.sort(function(a,b){
   return a.price-b.price
   
  })

 //if(wh[0].hasOwnProperty('price')){return "null"}else{return wh}
 
  return wh.length==0?"null":wh[1].name;
}
console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]))
console.log(chosenWine([]))
*/

function toArray(obj) {
	return Object.entries(obj)
}
console.log(toArray({ a: 1, b: 2 }) )
function redundant(str) {
	 function first(){
		console.log(str);
	}
	return first() ;
}
redundant("apple");