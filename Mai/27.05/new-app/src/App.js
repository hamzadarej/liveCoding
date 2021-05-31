import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDos";

function App() {
  const [list, setList] = useState([]);

  const remove = (itemToRemove) => {
    // itemToRemove has the id for that specific item
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };
  const check = (itemToCheck) => {
    // itemToCheck has the id for that specific item
    console.log(itemToCheck);
    list.filter((item) => {
      if (item.id === itemToCheck) {
        // revers done
        item.done = !item.done;
      }
      return item;
    });
    console.log(list);
  };
  console.log(useState);
  return (
    <React.Fragment>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <List setList={setList} />
        <ToDos list={list} remove={remove} check={check} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
