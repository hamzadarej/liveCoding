let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.max(x, y, z));

let str = "20.4";
let strIntoNum = parseInt(str,10);
console.log(strIntoNum);

let integer = "1005";
console.log(parseInt(integer));
let float = "10.05";
console.log(parseFloat(float));

bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");


const names = ["T", "Hi"];
console.log(names[1][0]);
const emptySpacesAdvancedVersion = (str) => {
    return str.length-str.split("").filter((chr) => chr != " ").length;
  };
  console.log(emptySpacesAdvancedVersion("   s5  "));
  function main (x,y){
      function inside(n){
         return n*10/100;

      }
      return inside(x)+inside(y);

  }
  console.log(main(4,3));
  