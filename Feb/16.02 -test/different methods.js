function capitalizeFirstLetter(str) {
    let strS=str.split(" ");
   let strMap= strS.map((a)=>a.slice(0,1).toUpperCase()+a.slice(1));
   return strMap.join()
}

console.log(capitalizeFirstLetter("hey there"))
console.log(capitalizeFirstLetter("the quick brown fox "))