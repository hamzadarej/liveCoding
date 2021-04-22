const container = document.querySelector(".container");
console.log(container);

const spanList = document.querySelectorAll(".container span");
console.log(spanList);

const hightlight = document.querySelectorAll("li[class='hightlight']");
console.log(hightlight);
hightlight[0].style.backgroundColor = "red";

const moreClass = document.querySelector(".main");
moreClass.classList.add("small");