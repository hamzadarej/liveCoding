
const container = document.querySelector(".container ul");
const orderList = document.querySelector(".order-list");

container.addEventListener("click",(e)=>{
    if(e.target.className=="delete"){
        let list=e.target.parentElement;
        container.removeChild(list);
    };
    if(e.target.className=="order"){
        let father=e.target.parentElement;

        orderList+=father
    };

})