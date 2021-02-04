
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var someAdjective = "quickly";

var wordBlanks ="The"+" "+myAdjective+" "+myNoun+" can "+someAdjective+" "+ myVerb+".";
console.log(wordBlanks)
//
function nextInLine(arr, item) {
    // Only change code below this line
     arr.push(item);
    return arr.shift();
    // Only change code above this line
    
  
  }

  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  //
  console.log(".....---------------------------------------------");
  

function cc(card) {
  var count = 0;
  // Only change code below this line
  
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
   
}
var holdBet="Hold";
 if(count>0){holdBet= "Bet"}



return count+" "+holdBet;


  
  // Only change code above this line
}
console.log(".....---------------------------------------------");
console.log(cc(2)); 
console.log(cc(7));
console.log(cc(3));
console.log(cc("K"));
console.log(cc("A"));
