const ageCounter =(age)=>{
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
numbers(2,4,5,7,8,6)//=> 6 
//cool functions

/*(function printName(c, v){
    console.log(`hi i am cool function ${c+v}`);
})(2,5);*/
const printName1=(a,z)=>{
    return `hi i am cool function ${a+z}`
}
console.log(printName1(5,4));
// assignments 
//1
const twofer=(str)=>{
    str1 = str
    str1="you"
    return `Two for me and one for ${str||str1}`
}
console.log(twofer("fran"))
console.log(twofer())
//2
const calculP =(num,num1)=>{
    exp=2;
    return Math.pow(num,num1||exp)

};
console.log(calculP(3,7));
console.log(calculP(3));
//3
const howManyArgs =(...arr)=>{

return arr.length;
}
console.log(howManyArgs("better",false,1))
4//
const sumN=(...arrs)=>{
    count = 0;
    for(let i=0;i<arrs.length;i++){
        count += arrs[i]
    }
    return count
}
console.log(sumN(25, 25, 20))
console.log(sumN(1, 15))
// 4
const average=(...arr)=>{
    result=0
    arrN =arr.length
    for(let i=0;i<arr.length;i++){
        result+=arr[i]/arrN
    }
    return result
}
console.log(average(1, 2)) 
console.log(average(1, 3, 6, 10))
console.log(average(12, 14, 16))
    
