/*let item = "elements";
let times = "one hour";
for(let i = 0 ; i < item.length;i++){
console.log(item * item.length)}*/
/* Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
i.e.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10*/

const findG = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }

  return result.join(",");
};
console.log(findG([5, 7, 10, 15], 8));

let str = ["rami", "ilhem"];
console.log(str.slice(0));
//Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, ”“a, e, i, o, u") in the string.
//i.e. findVowels(“this is a string”) ➞ 4
const countV = (strC) => {
  let result = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < strC.length; i++) {
    if (strC[i] == "e") {
      result++;
    }
  }

  return result;
};
console.log(countV("this is me"));
// No Duplicates!
/*A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
 [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
 [1, 6, 6, 9, 9] ➞ [1, 6, 9]
 [2, 2, 2, 2, 2, 2] ➞ [2]
 [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]*/
const duplicate = (numD) => {
  let result = [];

  for (let i = 0; i < numD.length; i++) {
    let count = 0;
    for (let j = 0; j < numD.length; j++) {
      if (numD[i] == numD[j]) {
        count++;
      }
    }
    if (count == 1) {
      result.push(numD[i]);
    } else {
    }
  }

  console.log(result);
  return result;
};
console.log(duplicateH([1, 4, 4, 7, 7, 7]));
//                                                        the right one no duplicate
const duplicateH = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j) {
        if (str[i] === str[j]) {
          str.splice(j, 1);
        }
      }
    }
  }
  return str;
};

console.log(duplicateH([1, 4, 4, 7, 7, 7]));
// i=0 / j=1 : 5 == 5 / 5==7/ 5==5 / 5 ==9 counter 2
//i =1 /j =0 : 7==5 / 7==7 / 7== 5/ 7==9 counter 1
//i = 2 j =0 : 5==5/ 5==7/ 5==5/ 5==9 counter 2
//i=3 j=0 :  9==5/ 9==7/ 9==5/ 9==9 counter 1

//                   0  1  2  3  4
//console.log(findD([5, 7, 5, 7, 9]));
//         0   1  2  3
duplicate([5, 7, 5, 9]);

/*Dictionary. (take your time on this pls ) also as tip you can use .includes()
 Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
 Notes:
 If none of the words match, return an empty array.
 Keep the filtered array in the same relative order as the original array of words.
 Examples:
 dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
 dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
 dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []*/
const dictionary = (strM, arrY) => {
  results = [];

  for (let i = 0; i < arrY.length; i++) {
    if (arrY[i].includes(strM)) {
      results.push(arrY[i]);
    }
  }

  return results;
};
console.log(dictionary("t", ["button", "breakfast", "border"]));
