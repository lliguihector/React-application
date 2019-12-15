import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
persons: [
  {name: 'Max',age: 28},
  {name: 'Manu', age: 29},
  {name: 'Stephanie', age: 26}
]
}

//ES6 Arrow function 
switchNameHandler = (newName) => {
//console.log('was clicked!');

//DON'T DO THIS: this.state.persons[0].name = 'Hector';
this.setState({
  persons:[
    {name: newName,age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 27}
  ]


})
}

nameChangedHandler = (event) =>{
  this.setState({
    persons:[
      {name: 'Max',age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ]
  
  
  })
}

  //rendor method
  render() {

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer'
};

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
        onClick={this.switchNameHandler.bind(this,'James')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>My Hobbies: Racing</Person>
        <Person
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Milton!')}
        changed={this.nameChangedHandler}></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
