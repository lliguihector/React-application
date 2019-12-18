import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//import persons component dont need to add the .js extencion 
import Person from './Person/Person';


//CLASS 
class App extends Component {


  //State 
state = {
persons: [
  {name: 'Max',age: 28},
  {name: 'Manu', age: 29},
  {name: 'Stephanie', age: 26}
],
otherState: 'some other value',
showPersons: false 
}

//ES6 Arrow function  changes the first name of the array list 
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

//Function 
nameChangedHandler = (event) =>{
  this.setState({
    persons:[
      {name: 'Max',age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ]
  
  
  })
}


//Function 
togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}


  //rendor method
  render() {
    //Inline style only use to scope your style in the desire target component 
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer',
  background: 'green',
  color: 'white'
};

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>

        {  this.state.showPersons ? 
        <div>
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
        </div> : null
        }
      </div>
    );
  }
}

export default App;
