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
