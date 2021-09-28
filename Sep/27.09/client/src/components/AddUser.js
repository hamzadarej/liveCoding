import React from "react";
import {useState} from 'react'
import axios from "axios";
function AddUser() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [avatar, setAvatar] = useState("");
   
  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };
  const submitHandle = async (e) => {
      e.preventDefault();
      const data=new FormData();
      data.append("username", username);
      data.append("password", password);
      data.append("confPassword", confPassword);
      data.append("avatar", avatar);

      try {
          const result=await axios.post("/register",data,{
              headers:{"Content-Type": "multipart/form-data",}
          })
          console.log(result);
      } catch (error) {console.log(error.message,"here");
          
      }
  }
  
   return (
        
        <div className="addUser">
             <h4>Add New User</h4>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="username"
          id="1"
          placeholder="Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.username}
        />
        <input
          type="password"
          name="password"
          id="2"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.password}
        />
        <input
          type="password"
          name="confPassword"
          id="3"
          placeholder="Repeat your pass"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.confPassword}
        />
        <input type="file" name="avatar" id="" onChange={handleUpload} />
        <input type="submit" value="Add user" />
        <input type="reset" value="Clear" />
      </form>
        </div>
    )
}

export default AddUser
