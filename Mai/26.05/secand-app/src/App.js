import {Text,Hallo} from "./components/Text"
let name="hamza";
const names =["salim","ahmed","mohamed"];
const listItems=names.map((name,i)=><li key={i}>{name}</li>)
function App() {
  return (
    <div className="App">
      <h1>
        hi im react
       <Text />
       <Hallo userName={name} age="27" namesArr={names}/>
       <ul id="ul">{listItems}</ul>
      </h1>
    </div>
  );
}

export default App;
