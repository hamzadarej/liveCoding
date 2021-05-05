import data from "./data.js";
let parsedData =JSON.parse(data);
console.log(parsedData);

/*import {data} from "./data.js"; to import more than one data*/
const section=document.querySelector("#list");

parsedData.forEach((obj) => {
    let {name,age,add,img}=obj;
    let personInfo =`
    <div>
    <h2>${name}</h2>
    <li>${age}</li>
    <li>${add}</li>
    <img src=${img}><br>
    
    </div>`;
    section.innerHTML +=personInfo
    
});

