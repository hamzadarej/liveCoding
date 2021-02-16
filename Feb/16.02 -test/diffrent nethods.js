//2. Validation
function validPin(pin) {
    let result;
    let counter=0;
    let sum=pin.split("").reduce((el,a)=>parseInt(el) +parseInt(a))
    for(let i=0;i<pin.length;i++){
    let lastIsEven=pin.slice(-1)    
      
     if(pin.length==4
     &&sum>=5
     && parseInt(lastIsEven)%2==0)
     {result=true;}else{result= false}
        
     if(pin[i]==pin[i+1]){counter++ }
     if(counter>2){return false}
     
    }
    return result
        
    }
    console.log(validPin("165p"))
    console.log(validPin("5546"))
    console.log(validPin("4446"))
    console.log(validPin("0808"))