// const functionName = (parameters)=>{..}
const print = (str)=>{
    console.log(str);

}

// Invoke the function
function login(){
//some things
halloUser()

//more steps

}
function halloUser(){
return `hey ,welcome back`

}
// call stack that's mean to call inside a function other function that's name nested function
// never call function from another function and other function from function.
//never do this one
/*function one(){
    two();
}
function two(){
    one();
}*/


//.map == loup i
// some code here is my gift i and currentValue
//map is tool to go inside an array
const names = ["hamza","salim","ahmed"];
const newArr = names.map((name, i)=>{
    if(name == "salim"){console.log(name.replace("salim","anis"))}
    console.log(name+" has index number "+i)});
// array.map( ()=>{})
const cities = ["berlin","leipzig","köln"];
const newCity = cities.map((city ,i)=>console.log(city));
// .reduce() 
const numArr = [1,2,55,66,54];
const reducer = numArr.reduce((acc,cur)=>acc+cur, 50); //the product of it */+ to acount the sum of it
console.log(reducer);
// break 
// breaking out of a loop:break to limit the loup and stop it with special number exp 4, 5
for (let i = 1;i <= 10 ;i++){
    console.log(i);
    if (i==4){
        break
    }
}// 1234 ,to break the loup till number 4
// continue
for (let i = 1;i <= 10 ;i++){
    
    if (i==4){
        continue;
    }else{console.log(i)}
} //=> 12356789,to skip 4 and contunie with 5
