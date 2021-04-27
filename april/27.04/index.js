const body = document.querySelector("body");
body.style.fontFamily="monospace";
body.style.textAlign="Center";



const header = document.querySelector("h1").style;
header.padding="10px";
const main =document.querySelector(".main").style;

main.cssText = "display:flex; color:blue; text-shadow:1px 1px 1px black;  justify-content:space-between; align-items:center;"


const textLI = document.querySelectorAll(".li");
textLI.forEach(({style})=>{
style.fontSize="1.5rem";
style.fontStyle="bold";
style.borderBottom="1px black solid";

});

