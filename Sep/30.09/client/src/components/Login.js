import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  axios.defaults.withCredentials = true;
  const loginUser = () => {
    axios
      .post("http://localhost:5000/login", {
        //  username:username,
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.user) {
          setLoginMessage(`Welcome ${res.data.user.username}`);
        } else {
          setLoginMessage(res.data.message);
        }
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

        <button onClick={loginUser}>Login</button>
      </div>
      <h4>OR</h4>
      <Link to="/register">Register</Link>
      <h4>{loginMessage}</h4>
    </div>
  );
};

export default Login;
