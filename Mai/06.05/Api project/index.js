
const fetchJson=()=>{
    fetch("./date.json")
    .then((response)=>response.json())
    .then((json)=> {
        let userList="<h2>All users <h2/>";
        json.forEach((user) => {
            
        let {id,name,age,city,photo}=user;
        userList += `<div id=${id}>
        <div>${photo}</div>
        ${name},<span>${age}</span> old , and I live in <span>${city}</span>

         </div>`;
            
        });
        document.querySelector(".result").innerHTML=json;

    })
    .catch((err)=>console.log(err))

};