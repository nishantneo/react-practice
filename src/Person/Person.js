import React from 'react';

class Person extends React.Component{
    render ()
    {
        return (
           <p>I'm a Person {props.name} and i'm {props.age} year old.</p>
        );
    }
}
export default Person;