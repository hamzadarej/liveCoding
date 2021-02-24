function sevenBoom(arr) {
	if(arr.join("").includes(7)){return "Boom!"}else{return "there is no 7 in the array"}
	
}
console.log(sevenBoom([1, 2, 3, 4, 5, 75 ]))
function firstRepeat(chars) {
    let count=0;
    let arr =[];
    let charsS=chars.toLowerCase().split("");
    for(let i=0;i<charsS.length;i++){
        if(charsS[i+1]===(charsS[i])){arr.push(charsS[i])}
        
    }
   // if(count>0){return charsS}
    
	return arr;
}
console.log(firstRepeat("aegola"));
console.log(firstRepeat("halgroogg"));