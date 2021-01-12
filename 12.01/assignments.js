//Exercise 1
function Exercise (num){
    if (num <= 0){ return true ;
}else {return false;}}
console.log(Exercise(-1))
//Ex 2
function dogAge (age) {
    if (dAge=age *7){
        return ("your dog is "+dAge+" years old in dog years")
    }
}
console.log(dogAge(5));
//Ex 3
function calcSnack (person,age,dayAmount){
    if (restLifeSnack =(100 -age) *dayAmount*365){
        return (person+" will consume " +restLifeSnack+" Units"+" till 100 years old" )}
}
console.log(calcSnack("Hamza",25,2));
console.log(calcSnack("Salim",30,3));
//Ex 4
function monthN (expr){
switch (expr) {
  case '1':
    console.log('january');
    break;
  case '2':
     console.log('February');
    break;
  case '3':
     console.log('March');
    break;
  case '4':
    console.log('April');
    break;
     case '5':
    console.log('May');
    break;
    case '6':
        console.log('june');
        break;
    case '7':
         console.log('July');
        break;
    case '8':
         console.log('August');
        break;
    case '9':
        console.log('September');
        break;
    case '10':
        console.log('October');
    case '11':
            console.log('Novamber');
        break;
    case '12':
        console.log('December');}}
        monthN("4")
        // Ex 5

        function countEr (x,y){
            let num=0;
            for(let i=0 ; i < y.length ; i++){
                if ( y[i]==x){
                    num++;
                }
            }return num

        }
console.log(countEr("i","hi i'm hamza and i live in leipzig"));
