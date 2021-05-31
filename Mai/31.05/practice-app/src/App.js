import React from "react" ;
import Data from "./data.json";
//import { add } from "./helpers";
//const users =Data.map((obj)=><div key={obj.id}>{obj.name} and I'm {obj.age} old and I live in {obj.img}</div>)
function App() {
  const users =Data.map((obj)=>{
    const{id,name,age,img,city,emoji,likes,comment}=obj;
    
      return(<div className="box" key={id}>
        <div><h3 className="text"> I'm {name} and I'm {age} old and i live in {city}, {emoji} </h3> 
        <span className="likeAndCo">{likes} {comment}</span></div>
        
        <img alt="cityImg" src={img}/>
        
         </div> )
    
  })
  return (
    <div >
      {users}
    </div>
  );
}

export default App;
