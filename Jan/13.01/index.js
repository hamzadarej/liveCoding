//practice
const calcCH = (str,letter) => {
    num = 0 ;
    for(let i = 0 ; i <= letter.length ; i++){
        if (letter[i]==str) {num++}

    }return num
}
console.log(calcCH('s','salim say that is false'));
console.log(calcCH('l','salim say that is false'));
//
const names =["hallo","hi"];
console.log(names[1][0]);
//
const numbersCT = () => {
    
    
    for (let i =5 ;i >= 0 ;i--){
    text = "";
    for (let j= 1;j <= i ;j++){
            text += j;
        }
    console.log(text) 
    }
}
numbersCT();
//
const dogAge = (dogAgeH) => {
    let result = dogAgeH*7;
    return `your dog is ${result} years old in dog years `;

};
console.log(dogAge(5))
// password generater
let Characters =[1,2,3,4,5,6,7,8,9,"q","w","e","r","t","z","i","o","p","a","s","d","f","g","h","j","k","l","ö","ä","y","x","c","b","n","m","!","#","§","$","%","&","/","?"];
const passwordGen = ()=>{
let result ="";
let randomNum;
for( let i=0; i <=30 ;i++){
    randomNum = Math.floor(Math.random()* Characters.length);
    result += Characters[randomNum]; 
}
return result;
}
console.log(passwordGen());