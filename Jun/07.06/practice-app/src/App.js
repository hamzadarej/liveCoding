import Practice from "./Practice";
import React, {useState,useEffect} from "react";

function App() {
  const[count,setCount]=useState(1);
  useEffect(()=>{
    console.log("im here");
    if(count>10)
    {console.log("more than 10 change")}
  },[count])
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    hey
    <h1>{count}</h1>
    <Practice/>
    </div>
  );
}

export default App;
