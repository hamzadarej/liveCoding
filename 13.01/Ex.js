const checkTF =(str)=>{
    let newStr = str.toLowerCase();
    let counterX = 0;
    let counterO = 0;
    for(let i = 0 ; i < str.length ; i++){
    if (newStr[i] == "x"){counterX++;}

    if (newStr[i] == "o"){counterO++;}

    

    };
if (counterO === counterX) {return true;}
        else{return false;}
}
console.log(checkTF("Xxoo"));
// 78912,789,78,7
const newOne = ()=> {
    for (let i = 10 ; i >= 7; i--) {
      numA=""
      for (let j = 7; j <= i; j++) {
          
      numA=numA+j;}
       console.log(numA) 
    }
  }
  
  newOne()