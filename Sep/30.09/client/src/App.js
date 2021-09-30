import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      <Router>
        <Route path="/" exact component={Home} />
        {/*    <Route path="/" exact render={Home} />
        <Route
          path="/"
          exact
          component={() => {
            <Home name="Hadi" />;
          }}
        />
    
    */}
        <Route path="/register" exact component={Register} />
        <Route path="/users" exact component={Users} />
        <Route path="/login" exact component={Login} />
      </Router>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
