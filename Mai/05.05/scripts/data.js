const obj = [
  {
    name: "hamza",
    age: 27,
    add: "leipzig",
    img:
      "https://www.leipzig-im.de/images/bilder/Augustusplatz-City-Hochhaus-Universitaet-und-Krochhaus_Andreas-Schmidt_leipzig.jpg",
  },
  { name: "wael", age: 30, add: "Berlin", img:
  "https://static.dw.com/image/43901161_303.jpg", },
  { name: "aymen", age: 29, add: "München", img:
  "https://cdn.flixbus.de/city_description_images/muenchen-allgemeine-informationen.jpg", },
];
// step one making obj into JSON
const obj1 = {};
let data = JSON.stringify(obj);
let data1 = JSON.stringify(obj1);

export default data; /*to export just one Object*/
/*to export more than one*/
/*export {
      data ,data1
  }*/
