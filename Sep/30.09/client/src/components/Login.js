import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  axios.defaults.withCredentials = true;
  const loginUser = () => {
    axios
      .post("login", {
        //  username:username,
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        //localStorage.setItem("token", res.data.token);
        if (res.data.user) {
          setLoginMessage(`Welcome ${res.data.user.username}`);
        } else {
          setLoginMessage(res.data.message);
        }
      });
  };
  let history = useHistory();
  const redirect =()=>{
    history.push("/");
  }
  const logout = () => {
    axios.get("logout").then((res) => {
      console.log(res)
      
      
    });
  };

  return (
    <div className="App">
      <div className="login">
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username ..."
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password ..."
        />
        <button onClick={loginUser}>login</button>
      </div>
      <h4>OR</h4>
      <Link to="/register">Register</Link>
      <h4>{loginMessage}</h4>
      <button onClick={()=> {logout(); redirect()}}>logout</button>
    </div>
  );
};

export default Login;
