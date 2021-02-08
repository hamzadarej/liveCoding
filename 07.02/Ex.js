/*var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"] ;
  console.log(gloveBoxContents);*/

  console.log('-------------------------------------------------------------')
  
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
 console.log(collection[2548].hasOwnProperty("tracks"))
  function updateRecords(object, id, prop, value) {
    
    if(prop !=="tracks"&&value !==""){object[id][prop]=value}
    else if(prop==="tracks"&& !object[id].hasOwnProperty("tracks")){object[id][prop]=[value]}
    else if(prop==="tracks"&& value!==""){object[id][prop].push(value);}
    else if (value ===""){delete object[id][prop];}
    return object;
  }
  
  console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));

console.log('-------------------------------------------------------------')
  var myArray = [1];
var i=5;
while(0<=i){
    myArray.push(i);
    i--;
}
console.log(myArray);
console.log(Array.isArray(myArray))
console.log(myArray.hasOwnProperty(1));
console.log(myArray.includes(1));