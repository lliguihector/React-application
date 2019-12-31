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
// switchNameHandler = (newName) => {
// //console.log('was clicked!');
// //DON'T DO THIS: this.state.persons[0].name = 'Hector';
// this.setState({
//   persons:[
//     {name: newName,age: 28},
//     {name: 'Manu', age: 29},
//     {name: 'Stephanie', age: 27}
//   ]
// })
// }

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


deletePersonHandler = (personIndex) => {
  //better to update  in an imutable fasion withought mutating the original state first 
  // alert("are you sure you want to delete: " + this.state.persons[personIndex].name);
  //This is not a good aproach as it alters the original state by a pointer 
// const persons = this.state.persons;
//It is better to create a copy of the state array and then alter it 
// const persons = this.state.persons.slice();

//Alternitive methoth to slice() method 
const persons = [...this.state.persons];

persons.splice(personIndex,1);
this.setState({persons: persons})

}

//Function 
togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

  //Rendor method
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

//Varia
let persons = null;

//If statement 
if (this.state.showPersons){
persons = (
  <div>
    {this.state.persons.map((person, index) => {
      return <Person 
      click={() => this.deletePersonHandler(index)}
      name={person.name} 
      age={person.age}/>
    })}
  {/* <Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age}>My Hobbies: Racing</Person>
  <Person
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  click={this.switchNameHandler.bind(this,'Milton!')}
  changed={this.nameChangedHandler}></Person>
  <Person 
  name={this.state.persons[2].name} 
  age={this.state.persons[2].age}/> */}
  </div> 
);
}
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}
      </div>
    );
  }
}

export default App;
