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
console.log(arr4.splice(3))//=> "i","let" to print out every element after the number that we put it till the end of the array
//.fill()#
 //        0  1  2 3 4 5 6
let arr5 =[22,34,6,7,4,4,3];
let newArr5 = arr5.fill(20,1,4); //fill replace the element inside by giving the position to replace it .fill(15,1,3)from 1 till 3 //3-1=2 will be changed
console.log(newArr5);
// do if its faulthy its print one time the counter that we declare it in our exemple =0 
let counter = 0;

do {
console.log(counter);
counter++;
} while (counter > 3)
// while
let loopOne = 13;
while(loopOne <= 14){loopOne++; // if its true => loopona +1 = 14+1=15
    
}
console.log(loopOne)

//if  
/*let loopOne1 = 0;
if(loopOne1 <= 5){loopOne1++;}
console.log(loopOne1)*/
/*const countV = (strC) => {
    let result = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    
    for (let i = 0; i < strC.length; i++) {
      if (strC[i] ==  "e" )  {
        result++;
      }{if (strC[i] ==  "a" )  {
        result++;
      }{if (strC[i] ==  "o" )  {
        result++;
      }}{if (strC[i] ==  "u" )  {
        result++;
      }}{if (strC[i] ==  "i" )  {
        result++;
      }
    }}}
  
    return result;
  };
  console.log(countV("this is me and my family we are living here about 3 years"));*/
  let counts = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let text = ("im here for while")
  do {
      
      counts++;

  }while(text.includes(vowels.toString(''))){counts++}
  console.log(counts)