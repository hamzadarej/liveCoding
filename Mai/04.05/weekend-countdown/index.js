const year =new Date().getFullYear();
document.querySelector(".year").innerHTML=year;

const checkNow = document.querySelector("#checkNow");
document.querySelector("h1").innerHTML="hey, This is the weekend finder app";
const date = new Date();
const getDayName = ()=> {
    return date.toLocaleDateString("en-EN",{weekday:"long",});
};
console.log(getDayName());
/*document.querySelector(".result").innerHTML=getDayName();*/