import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Users() {
  const [data, setData] = useState([]);
  const getAll = () => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);

      setData(res.data);
    });
  };
  useEffect(() => {
    getAll();
  }, []);
  //const displayData =data.map((a)=>a.username)
  
    
  // console.log(displayData);
  return <div>
      {data.map((user)=>
          <ul key={user._id}>
            <li>user: {user.username}</li>
            <li>role: {user.role}</li>
            <img src={`http://localhost:5000/${user.avatar}`} style={{width:"100px"}} alt={user.username} />
          </ul>)}
          </div>
      
  
}

export default Users;
