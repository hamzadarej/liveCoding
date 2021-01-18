//for loop

for (let i =0; i < 5 ; i++){
    if (i <=1){
        console.log(`there is ${i} star in the sky`)
    }else{console.log(`there are ${i} stars in the sky`)
}

}
for (let i= 5; i> 0; i--){
    console.log(`4 *${i}= ${i*4}`);
}
for (let i= 0 ; i <= 10; i++){
    console.log(`this is multi table for ${i}`);
    for (let j= 0;  j <= 10; j++){
        console.log(`${i} *${j}= ${i*j}`);
}
}
for (let i = 0 ; i <=10 ; i++){
    console.log(i% 2 == 0? `${i} is even`: "")
}
let strZ ="im in tunisien"; 
console.log(strZ[0].toUpperCase()+ strZ.slice(1))
console.log(strZ.replace(strZ[0],strZ[0].toUpperCase()));

//loop
let drawShape = ("");
for (let i = 0; i <= 4; i++){
    for (let j = 1; j <= i; j++){
    drawShape += j
    }
    console.log(drawShape);
    drawShape = '' ;
}
const names =["hamza","salim","anis"];
for (let i =0 ; i< names.length; i++){
let result = " ";
console.log(`${names[i].charAt(0).toUpperCase()+names[i].slice(1)}`)

}

 
//Store Mark’s and John’s mass and height in variables.
let massM = 72.5;
let heightM = 1.65 ; 
let massJ = 80 ;
let heightJ = 1.75;
//Calculate both their BMIs and store their BMIs in variables.
let bmiM = massM / (heightM*heightM);
let bmiJ = massJ / (heightJ*heightJ);
//Create a boolean variable containing information about whether Mark has a higher BMI than John.
console.log( bmiM > bmiJ ? "join has higher BMI than Mark":"Mark has higher BMI than join")
//Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”)
    
//Create an if statement which prints the name and BMI of the person with the highest BMI.
if (bmiM > bmiJ){
console.log("Mark is the winner")} else {
    console.log("John is the winner");}

///*Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”./
const lifeStatus = (firstN,age) => {
    let status = "";
if (age < 13 ){status ="child";}
else if (age >= 13 && age < 20){status = "teenager";}
else if (age >= 20 && age < 30) {
    status = " young adult";}


return `${firstN} is a ${status}`;
};
firstZ = "hamza";
age = 10 ;
console.log(lifeStatus("salim",age));


