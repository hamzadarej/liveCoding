let clicked = false;
document.querySelector(".hamburger").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".side-menu").style.cssText = "display:flex;";
  } else {
    document.querySelector(".side-menu").style.cssText = "display:none;";
  }
});
