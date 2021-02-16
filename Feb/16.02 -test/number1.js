function validPin(pin) {
    let result;
    let counter=0;
    let sum=pin.split("").reduce((el,a)=>parseInt(el) +parseInt(a))
    for(i=0;i<pin.length;i++){
    if(pin[i]==pin[i+1]){counter++}
    }
    result=pin.split().map((a)=>a.length==4 && a[a.length -1]%2==0 &&parseInt(a)==a && sum>=5&&counter<=2)
     return result.join()
        
    }
    console.log(validPin("1624"))
    console.log(validPin("5p46"))
    console.log(validPin("4446"))
    console.log(validPin("6626"))