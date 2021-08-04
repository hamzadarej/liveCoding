const args = process.argv.slice(2);

function capFirstLetter(str){
    let capstr=str.map((a)=>a[0].toUpperCase()+a.slice(1).toLowerCase())
  return console.log(capstr.join(", ")); 
}
capFirstLetter(args)
/*let strToString=str.toString()
return console.log(strToString.slice(0,1).toUpperCase()+strToString.slice(1).toLowerCase()); */
const cities= ["berlin","hamburg","leipzig"]
capFirstLetter(cities);