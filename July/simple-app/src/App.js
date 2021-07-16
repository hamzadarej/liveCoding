import React,{ SideNav } from "./components/SideNav";
import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  return (
    <div className="App">
      <SideNav />
      
      <div className="main">
        <h1>Home</h1>
      <LoremIpsum p={4} />
        <p>hier is my text</p>
      </div>
    </div>
  );
}

export default App;
