import {Text,Hallo} from "./components/Text"
let name="hamza";
function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        hi im react
       <Text />
       <Hallo userName={name}/>
      </h1>
    </div>
  );
}

export default App;
