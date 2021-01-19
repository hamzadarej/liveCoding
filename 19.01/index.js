//.push add an item
let citynames = [];
citynames.push("hi");
console.log(citynames)
citynames.push("mohamed")
citynames.push("salim")
console.log(citynames);
//.pop remove an item the very last element 
citynames.pop();
citynames.pop();
console.log(citynames)
// .unshift
// add an item to the beginning
citynames.unshift("yupp , anis")
console.log(citynames)
// .shift 
// remove an item from the beginning
citynames.shift();
console.log(citynames)
//.indexof
let ciTys= ["Berlin","paris","prague","Rome"];

console.log(ciTys.indexOf("Rome"));
//.splice
// remove an item by the index number
/*let countrys = ["Berlin","paris","prague","Rome"]
let n = 1 ;
let romevedItemIndex = countrys.splice(pos, n);
console.log(romevedItemIndex)*/
for (let i= 0;i  < ciTys.length ; i++){
    console.log(ciTys[i])
}
//.split()
// divide a string into an array
let str = "hi this is me"
let newArr = str.split(" ");
console.log(newArr)
//.join()
// crate a string from array
let newArrJoin = newArr.join()
console.log(newArrJoin)
// .concat()
// merge two or more arrays
let arr1 = [1,33,55];
let arr2 = [5,17,80];
let arr3 = arr1.concat(arr2)
console.log(arr3);
// slice()
const add = ["hammamet","nabeul"];
let arrCopy = add ;
console.log(arrCopy)
arrCopy.push("Dubai");//to add
console.log(add)
arrCopy.pop() //to delete
console.log(add)
let shallowCopy = add.slice(); // to copy with slice will not update the original arrays 
console.log(shallowCopy)
shallowCopy.push("London")
console.log(shallowCopy)
console.log(add);

const addL = ["chaima","emna","hamza"];
let subStrn = addL.slice(1).join().toUpperCase()

console.log(subStrn);



