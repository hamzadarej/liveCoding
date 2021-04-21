function change(){
    console.log(window.document.getElementById('main'))
    window.document.getElementById('main').outerHTML=
    "<span>hi im from js </span>";
}

function multiply() {
    let userNum = document.querySelector("#num").value;
    let userNum1 = document.querySelector("#num1").value;
    // console.log(userNum);
    let resultText = "";
   
      resultText += `${userNum1} * ${userNum} = ${userNum1 * userNum} <br>`;
    
    document.querySelector(".result").innerHTML = resultText;
  }
 