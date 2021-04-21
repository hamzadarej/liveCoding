function change(){
    console.log(window.document.getElementById('main'))
    window.document.getElementById('main').outerHTML=
    "<span>hi im from js </span>";
}

function multiply() {
    let userNum = document.querySelector("#num").value;
    // console.log(userNum);
    let resultText = "";
    for (let i = 1; i <= 10; i++) {
      resultText += `${i} * ${userNum} = ${i * userNum} <br>`;
    }
    document.querySelector(".result").innerHTML = resultText;
  }
  function multiplynextN() {
    let user = document.querySelector("#num1").value;
    // console.log(userNum);
    let results = "";
    for (let i = 1; i <= 10; i++) {


      results += `${i} * ${userNum} = ${i * user} <br>`;
    }
    document.querySelector(".result1").innerHTML = results;
  }