function countTrue(arr) {
  counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      counter++;
    }
  }
  return counter;
}
console.log(countTrue([true, false, true]));
console.log(Math.exp(3));
function cubes(a) {
  return a * a * a;
}
console.log(cubes(3));
function sevenBoom(arr) {
  let arrJ = arr.join("").split(" ");

  for (let i = 0; i < arrJ.length; i++) {
    if (arrJ[i].includes(7)) {
      return "Boom!";
    } else {
      return "there is no 7 in the array";
    }
  }
}
console.log(sevenBoom([5, 757, 76]));
console.log("-------------------------------")
function powerMorphic(num) {
  let counter=0;
  for (let i = 2; i <= 11; i++) {
    let numM = Math.pow(num, i).toString();
 
    if (numM.endsWith(num)) {
       counter++;
    } else {
      result = "There are no powers that make it automorphic";
    }
    switch(counter){
        case 1 :
      result="Enamorphic";
       break;
       case 2 :
    result = "Dimorphic";
    break;
    
    case 4 :
   result = "Quadrimorphic";
            break;
            case 10 :
                result = "Polymorphic";
                break;
                
    }
    console.log(counter)
  }
  return result;
}
console.log(powerMorphic(5));
//for(let i=2;i<=10;i++){console.log(Math.pow(5,[i]))}
function getLength(arr) {
    let counter=0;
    let arrJ=arr.flat()

return arrJ.length
}
console.log(getLength([1,[2,[3]]]))
function arrayValuesTypes(arr) {
	let arrM= arr.map((a)=>typeof a)

  return arrM
}

console.log(arrayValuesTypes([1, 2, "null", []]))
//Finding Common Elements

function commonElements(arr1, arr2) {

let arrA=arr1.filter((a,i)=>arr2.includes(a)&&arr1.indexOf(a)==i)
return arrA
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
console.log("---------------------------------------")


const eastOrWest=(arr)=>{
    arrJ= arr.join().toLowerCase().split();

    let arrF=arrJ.filter((i)=>i=="east"||i.includes("east"))

    
    return arrF
}
console.log(eastOrWest(["east", "EAST", "eastEAST"]))