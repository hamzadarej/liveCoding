const hourTracking = [
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 }
  ];

function calculateHours(arr){
    

return arr.reduce((acc,cur)=>acc+(cur.end-cur.start),0)
}
console.log(calculateHours(hourTracking))
//
function capitalizeFirstLetter(str) {
    let strS=str.split(" ");
   let strMap= strS.map((a)=>a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase());
   return strMap.join(" ")
}

console.log(capitalizeFirstLetter("hey there"))
console.log(capitalizeFirstLetter("the quick brown fox "))
//Positive Dominant
//An array is positive dominant if it contains strictly more unique positive values than unique negative values. 
//Write a function that returns true if an array is positive dominant.
function isPositiveDominant(a) {
    uniqueCounter=0;
    noDupp=new Set(a)
    
   let arr=[...noDupp];
    
 return arr.filter((a)=>0>a).length <arr.filter((a)=>0<a).length
	
}
console.log(isPositiveDominant([1, 1, 1, -3, -3, -4]))
console.log(isPositiveDominant([5, 99, 832, -3, -4]))
