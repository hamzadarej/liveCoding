import { Text, Hallo, Date } from "./components/Text";
let name = "hamza";
const names = ["salim", "ahmed", "mohamed"];
const listItems = names.map((name, i) => <li key={i}>{name}</li>);


const getFullYear = "26 Mai 2021";

function App() {
  return (
    <div className="App">
      <h1>
        hi im react
        <Text />
        <Hallo userName={name} age="27" namesArr={names} />
        <ul id="ul">{listItems}</ul>
      </h1>
      <footer>
        <Date year={getFullYear} />
      </footer>
    </div>
  );
}

export default App;
