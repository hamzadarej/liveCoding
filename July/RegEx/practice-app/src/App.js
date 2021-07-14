import React,{Fragment} from "react";
/* Regular Expressions
 way to find a word in a text
some expressions:
? optional
* match zero or more
^ start with
$ ends with
. any chr Except line breaks 
\ escape chr
[^ao] negated range aka not wonted
[A-Z] range of chr aka from to
[a,z]
\w word
\W not a word
\d digit
\D not digit
\s spaces
\S not spaces
\b boundary
\B Not boundary 
*/
function App() {
  const IBANCheck=(str)=>{
    const regex=/^DE+\d{12}/g
    return regex.test(str)
  } 
  console.log(IBANCheck("DE152365789123"));
  const phoneCheck=(str)=>{
    const regex=/^\d{3}-?\d{8}$/g
    return regex.test(str)
  } 
  console.log(phoneCheck("123-45678594"));
  const emailCheck=(str)=>{
    const regex=/^[A-Za-z\.\_\-]+@+[A-Za-z]+\.+\w{2,6}$/g
    return regex.test(str)
  } 
  console.log(emailCheck("darejhamza@gamil.com"));

  



  return <Fragment>
   <h1>HEY</h1>
 </Fragment>
   
}

export default App;
