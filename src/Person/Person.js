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
    return (
            <div>
                <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name}/>
            </div>
        )

}
export default Person;