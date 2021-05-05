
const container = document.querySelector(".container ul");
container.addEventListener("click",(e)=>{
    if(e.target.className=="delete"){
        let list=e.target.parentElement;
        container.removeChild(list);
    };
    if(e.target.className=="order"){
        let list=e.target.parentElement;
        container.removeChild(list);
    };

})