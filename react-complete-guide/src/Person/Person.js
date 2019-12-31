//Import react
import React from 'react';

//Import Css
import './Person.css';

//a function with Es6
const person  = (props) => {
return(
<div className="Person">
<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}/>
</div>
)
};

//Export Component 
export default person;
