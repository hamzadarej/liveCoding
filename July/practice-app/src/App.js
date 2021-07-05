import React from 'react'

export default class App extends React.Component {
constructor(props){
super(props);
this.state = {
data:{name:"hamza",age:28},
isLogged:false,
user:"hamza",
}

};

render(){
  return(
  <div>my name is {this.state.data.name} and I'm {this.state.data.age} years old</div>


  )}
}