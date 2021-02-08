//callbacks =>max 1000 callbacks in javascript
function first(cb){
    let num =10;
    return cb+" "+num;
}
function cb(){
    return "its me";
}
console.log(first(cb()));

// map
const names =["hamza","caro","anis"];
const heyNames =names.map((item,index)=>`hi ${item},you live in ${index}`);
const heyNames1 = names.map((name)=>`hi ${name}`)
console.log(heyNames);
console.log(heyNames1)
//reduce
const numArr =[2,2,5,9,8,7,1,2,36,9,8,4,5];
const totalNum=numArr.reduce((acc,cur)=>acc + cur,0);

console.log(totalNum)
const countLetterAdv =(str)=>{
    let arr = str.toLowerCase().split("");

    let result =arr.reduce((acc ,cur)=>{acc[cur]=acc[cur]? acc[cur]+1: 1; return acc;},{});
    return result
};
console.log(countLetterAdv("tree"));
// filter
const filterArr =names.filter((name)=>name.includes("a"));
console.log(filterArr);

// find
const findVal = names.find((item)=> item.length==4);//its give us just the first one truthy => caro
console.log(findVal)




// fill
const numbers =[2,4,5,6,8,7,4,2];
numbers.fill(4,3,7);//we gone to fill the num 4 with using the position from 3 till 7 like slice(3,7)
console.log(numbers);

// some
const isEven = (item)=> item %2==0;
console.log(numbers.some(isEven)) // just one of the index should be Even and its return true

// every
const isBigger = item => item >20;
console.log(numbers.every(isBigger));// all of them should be bigger than 20 to get true 

// sort the longest word
const alpha =["a","c","b",2];
console.log(alpha.sort());
const words=["hi","i","like","development"];
const sortedArr = words.sort((a,b)=>b.length - a.length);// a is smaller then b => a=1,b=2
console.log(sortedArr[0]);
console.log("------------------------------------------")
// for in
const person ={
userName : "hamza",
age:27,
add:"L",

}
for(prop in person){
    console.log(`${prop}: ${person[prop]}`)
}
console.log("------------------------------------------")

// functions inside functions
function main(str1, str2) {
    function second(n) {
      return n.slice(0,1).toUpperCase()+n.slice(1).toLowerCase();
    }
    return second(str1) +" " +second(str2);
  }
  console.log(main("hamza", "salIm"));

  let box;
  for(let i=0;i<=5;i++){
      box ="";
      for(let j=0;j<i;j++){
          box += "+";
      }
      console.log(box)
  }
// functions that return other function
  const viewsCh = (() => {
    let x = (" view ");
    count=0;
    return () => {
        count++
      if(count >1){x=(" views ")}
      return count+x;
    };
  })();
  console.log(viewsCh());
  console.log(viewsCh());
  console.log(viewsCh());

  console.log("------------------------------------------")

// Immediately-invoked Function Expression
const sum = ((x,y) => {
  console.log(x + y);
})(3,4);

//SIAF

(function(){
    let today = new Date();
    let month=today.getMonth();
    let year=today.getFullYear();
    let day = today.getDate();
    console.log(`${day}/${month}/${year}`);
})();
  