import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: "hamza", age: 28 },
      isLogged: false,
      user: "hamza",
    };
    this.sum = function (x, z) {
      return x + z;
    };
    //this.handelSub=this.handelSub.bind(this)
  }
  add=()=>{console.log("im E6 function")}
  //function have to be bind
  handelSub() {
    console.log("im a normal function");
  }
  render() {
    return (
      <div>
        my name is {this.state.data.name} and I'm {this.state.data.age} years
        old
        {this.sum(10, 8)}
        {this.handelSub()}
        {this.add()}
      </div>
    );
  }
}
