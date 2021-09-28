import { useEffect, useState } from "react";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);

//get all data
  const getData = () => {
    fetch("/users")
      .then((results) => results.json())
      .then((data) => {
        localStorage.setItem("data",JSON.stringify(data));
        localStorage.setItem("dataDate",Date.now());
        
        setUsers(data)})
  };
  //delete data
  const deleteData = () => {
    localStorage.clear();
    setUsers([]);
    //localStorage.removeItem("data")
  };
  //useEffect
  useEffect(() => {
    if(localStorage.getItem("data")){
      setUsers(JSON.parse(localStorage.getItem("data")))
    }else{
      setUsers([])
    }
    getData();
  }, []);
  //const url="http://localhost:5000/"
  const usersList = users.map(({ username, role, avatar }) => (
    
    <table>
      <tr>
        <th>username</th>
        <th>role</th>
        <th>image</th>
       </tr>
       <tr>
        <td>{username}</td>
        <td>{role}</td>
        <td>
          <img src={avatar} alt={username} />
        </td>
      </tr>
    </table>
  ));
  return <div className="App">
    <h3>Users</h3>
    <button onClick={getData}>{users.length ? "Update" : "Get Data"}</button>
    <button onClick={deleteData}>delete</button>
    {usersList}
    <AddUser /></div>;
}

export default App;
