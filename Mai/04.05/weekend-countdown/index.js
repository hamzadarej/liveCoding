const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

const checkNow = document.querySelector("#checkNow");
document.querySelector("h1").innerHTML = "hey, This is the weekend finder app";
const date = new Date();
const getDayName = () => {
  return date.toLocaleDateString("fr-FR", { weekday: "long" });
};
const getTime = () => {
  return date.toLocaleDateString("fr-Fr", { day: "numeric" });
};
const getMonthName = () => {
  return date.toLocaleDateString("fr-Fr", { month: "long" });
};
console.log(getMonthName());
/*document.querySelector(".result").innerHTML=getDayName();*/

function weekend(e) {
  e.preventDefault();
  const userName = document.querySelector("#userName").value;
  const result = document.querySelector(".result");
  if (userName != "") {
    result.innerHTML = `hey ${userName},Today is ${getDayName()} the ${getTime()} ${getMonthName()},${
      5 - date.getDay()
    } days left till the weekend`;
  } else {
    document.querySelector("#userName").placeholder = "Do it now";
  }
}
checkNow.addEventListener("click", weekend);
