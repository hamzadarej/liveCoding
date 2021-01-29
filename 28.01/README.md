# Fun-Apps 😎

First step clone this repository to your machine 
Create index.js
then do the following :
1. do a task
1. do Git workflow (add,commit,push) you have the rights to push to this repo that you cloned
1. repeat step 1.

**Count characters only** Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number

Example :
> emptySpaces("Hi i") -> 3



**Need more money** Create a function that will receive a (user name , salary and his/her kids names)
* If the user has one kid subtract 30% taxes from the salary
* For two kids subtract 25% and 20% for more than two.
* If the user has no kids the taxes will be 55%
* Print out the result in a good formated way.

Examples :
> salaryCalculator("Fabi", 5000, "Zain", "Uschi");

> salaryCalculator("Olga", 4055, "Zain");



 **Call me** Create a function that receive a text from user and check if the user has entered a phone number, and print that out.
 
 Note : phone number should be within the German network starts with (030 or 017) only and has 7 digits after the prefix number
 
 Examples :
> phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398

> phone("Hi my number is 038  "); -> This is not a valid phone number 038



**IsBank** Write a function that checks whether the user has entered a valid German bank account.

 Note: German bank accounts should starts with DE and has 20 number after that.
 
// DExxxxxxxxxxxxxxxxxxxx

Examples :
> bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text

> bankChecker("I delete, have bank DE"); -> This is not a valid bank account

> bankChecker("DE12100110013000400011")); -> The bank account DE12100110013000400011 is valid



**This is crazy** Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

Examples :
> checkStr("Hi my name is HADI");

> checkStr("I like JavaScript"); 




**Tell me my age** Create a function that calculates the user age e.g. 2000 -> 20.

// tip try mdn for this one aka need some research 

Examples :
> age(1940) -> 81

> age(2022)) -> Please enter a valid year



 **Seasons** Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.


// I will be nice again to you and offer the arrays 😉


  const months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  
  
  const seasons = ["Winter", "Spring", "Summer", "Autumn"];
  
Examples :
> monthCheck("I love Jun"); -> Jun is in Summer

> monthCheck("We need Kartoffel"); -> I couldn’t find any month in your text, sorry try again



 **Student level check** Create a function will calculate a student degrees for 6 subjects,
if the average was less than 70 will print (F)

 Over 70 and less than 80 (C)
 
 Over than 80 and less than 85 (B)
 
 Over than 85 and less than 90 (A)
 
 And over 90 print (A+)
 
 
 Example :
 > studentAverage(99, 44, 44, 80, 80, 98, 89);



**Tell me more** Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)

 * print all the user input adding the greeting part and more text turning that input into a readable text.
 
 * If one of his activities was dance or party add "you are cool" to your outputted text.
 
 
Examples :
> userData("Zain", 22, "Kurfürstendamm", "dance", "party");

> userData("Olga", 40, "potsdamer platz", "party");

> userData("Nancy", 33, "viktoria luise platz", "swimming");



 **Validate Email** Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
 
 The string must contain an “@” character.
 
 The string must contain a “.” character.
 
 The “@” must have at least one character in front of it.
 
 e.g. “john@example.com” is valid while “@example.com” is invalid.
 
 The “.” and the “@” must be in the appropriate places.
 
 e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
 
Examples :
> validate("contact@hadi-nsreeny.com") -> This is valid email address, thank you

> validate("@hadi-nsreeny.com") -> Sorry, invalid email address


Happy coding 💪🏻
