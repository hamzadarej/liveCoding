const result = document.querySelector(".result");
const form = document.querySelector("form");
const header = document.querySelector("h1");
const msg = document.querySelector(".msg");
const done = document.querySelector(".done");
const changeColor = document.querySelector(".changeColor");
// showMsg
function newUser() {
  result.innerHTML += "Hey, welcome again 😎 <br>";
}
function winDowLoad() {
  
}
function redBg() {
  this.style.backgroundColor = "red";
}

function whiteBg() {
  this.style.backgroundColor = "white";
}
const start = () => {
  header.addEventListener("mouseenter", redBg);
  header.addEventListener("mouseleave", whiteBg);
};

const stop = () => {
  header.removeEventListener("mouseenter", redBg);
  header.removeEventListener("mouseleave", whiteBg);
};
// msg
function showMsg(str) {
  done.style.display = "block";
  msg.innerHTML = str;
}
function hide() {
  const close = document.querySelector(".close");

  close.parentElement.style.display = "none";
}

window.addEventListener("load", winDowLoad);
form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  const userInput = document.querySelector("#userData").value;
  showMsg(`Hey ${userInput}, thanks for your feedback`);
});
changeColor.addEventListener("click", (e) => {
  e.preventDefault();
  
  form.style.backgroundColor = "red";
});
form.addEventListener("reset", () => {
  showMsg("Your input has been cleared out.");
});
