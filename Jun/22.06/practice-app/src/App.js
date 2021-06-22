
import Home from "./components/Home"
import {Data,DataContext} from "./context"

function App() {
  console.log(DataContext);
  return (
    <DataContext.Provider value={Data}>
      
     <Home/>
    </DataContext.Provider>
  );
}

export default App;
