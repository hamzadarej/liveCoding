const arr1 = []; // 1es way
arr1.push("hi");
const arr2 = ["good","bad"];
console.log(arr1);
// new array
const arr3 = new Array();
arr3.push("cool");
console.log(arr3);
// .of()
let newArr = Array.of(1,44,55,6);
console.log(newArr)
//.sort 
let alpha = ["e","a","i","l","s","a"];
let newSorted = alpha.sort();
console.log(newSorted);
//.reserve()
// to reserve an array to change the position of the element the first will be the last 
let crazyArr = ["3","55","2"];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);
//Array.isArray() //check if array or not
//true or false
let bool = Array.isArray(crazyArr)
console.log(bool);
//.lastIndexOf()
//start searching backwards 
//-1 means nothing been found
//            0    1     2     3     4
const arr4 =["go","we","home","i","let"]
console.log(arr4.lastIndexOf("i"))//=>3
console.log(arr4.slice(3,4))//=>"i" we can limit it with number to get exactly what we need
console.log(arr4.splice(3))//=> "i,let"to print out every element after the number that we put it till the end of the array