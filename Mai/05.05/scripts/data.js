const obj = [
    { name: "hamza", age: 27, add: "leipzig" },
    { name: "wael", age: 30, add: "Berlin" },
    { name: "aymen", age: 29, add: "München" },
  ];
  // step one making obj into JSON
  const obj1 ={};
  let data =JSON.stringify(obj);
  let data1 =JSON.stringify(obj1);
  
  export default data;/*to export just one Object*/
  /*to export more than one*/
  /*export {
      data ,data1
  }*/
  