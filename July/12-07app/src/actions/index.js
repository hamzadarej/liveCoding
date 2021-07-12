//step 1
const increment = ()=>{
    return {
        type:"INCREMENT"
    }
}
const decrement = ()=>{
    return {
        type:"DECREMENT"
    }
};
const changeName = (name)=>{
    return {
        type:"INCREMENT",
        payload:name,
    };
};
export {increment,decrement,changeName}