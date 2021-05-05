import data from "./data.js";
let parsedData =JSON.parse(data);
console.log(parsedData);

/*import {data} from "./data.js"; to import more than one data*/
const section=document.querySelector("#list");

parsedData.forEach((obj) => {
    let {name,age,add}=obj;
    let personInfo =`
    <div>
    <h1>${name}</h1>
    <li>${age}</li>
    <li>${add}</li><br>
    
    </div>`;
    section.innerHTML +=personInfo
    
});

