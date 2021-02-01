// functions inside functions
function main(num1,num2){

function second(n){
    return n*n;
}
return second(num1)+second(num2)
}
console.log(main(3,4));

// Nested scopes 
let cool = true; //global variable
const outerFunction =(x,y)=>{
    let big =true;
    const innerFunction =(num)=>{
        return num /2 ;

    }
    return innerFunction(x) + innerFunction(y)
}
console.log(outerFunction(6,8))
// invoking == calling
// functions that return other function
const add =(()=>{
    let counter =0;
    return ()=>{
        counter ++;
        return counter;


    };
})();
console.log(add())
console.log(add())