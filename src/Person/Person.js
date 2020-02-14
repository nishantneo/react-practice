import React,{Component} from 'react';

/*class Person extends Component{
    render ()
    {
        return (
           <p>I'm a Person {props.name} and i'm {props.age} year old.</p>
        );
    }
}

 */

const Person = (props) =>

{
    return <p>I'm a Person {props.name } and i'm {props.age} year old.</p>
}
export default Person;