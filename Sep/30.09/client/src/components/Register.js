import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  axios.defaults.withCredentials = true;
  const register = () => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("confPassword", ConfPassword);
    data.append("avatar", avatar);

    axios
      .post("http://localhost:5000/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const uploadHandle = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="App">
      <h4>Register</h4>
      <div className="reg">
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
        <input
          type="password"
          value={ConfPassword}
          name="confPassword"
          onChange={(e) => setConfPassword(e.target.value)}
          placeholder="Repeat your password ..."
        />
        <input
          type="file"
          name="avatar"
          onChange={uploadHandle}
          placeholder=""
        />
        <button onClick={register}>Register</button>
      </div>
      <h4>OR</h4>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
