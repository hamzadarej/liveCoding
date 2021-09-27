import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch("/users")
      .then((results) => results.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getData();
  }, []);
  const usersList = users.map(({ _id, username, role, avatar }) => (
    <table >
      <tr key={_id}>
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
  return <div className="App">{usersList}</div>;
}

export default App;
