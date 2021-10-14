import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
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
  const getUsers=data.map((obj)=>{
    const {username,role,_id,avatar} = obj;
    return (<div> <div key={_id}>
            <li>user: {username}</li>
            <li>role: {role}</li>
            <img src={`http://localhost:5000/${avatar}`} style={{width:"100px"}} alt={username} />
          </div></div>)
  })
    
  // console.log(displayData);
  return <div>
    
    {getUsers}
       </div>
      
  
};

export default Users;
