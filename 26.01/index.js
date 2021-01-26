/*const ageCounter =(age)=>{
    let text;
    if (age>=18){text="you are welcome"}else{text="you are not allowed here"}
  
  return text

}
console.log(ageCounter(18))
//copy Array
const arr =["hi","I","you"];
const cloneArr =[...arr];//to copy aan array without change the original array
cloneArr[0]="cool"
console.log(arr);
console.log(cloneArr);
// ...args
const sum =(x, y)=>x + y;

    console.log(sum(10,15,12))
    const printFun =(userName ,age , ...arr)=>{
        console.log(arr);
        console.log(`hi ${userName} I am ${age},you like ${arr}`);
 };
printFun("hamza",27,"coding","cooking","techno","playstation");
const numbers =(...nums)=>{
    console.log(nums[nums.length -1]);
};
numbers(2,4,5,7,8,6)//=> 6 */
//cool functions
(function printName(c,v){
    console.log(`hi i am cool function ${c+v}`);
})(2,5);
const printName1=(a,z)=>{
    return `hi i am cool function ${a+z}`
}
console.log(printName1(5,4));
// assignments
const twofer=(str)=>{
    str1 = str
    str1="you"
    return `Two for me and one for ${str||str1}`
}
console.log(twofer("fran"))
    
    
