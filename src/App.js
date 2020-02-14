import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component
{
    state={
        persons:[
            {name:'Sagar' ,age:24},
            {name:'Vishanl', age:25},
            {name:'Rahul', age:28}
        ]
    }
    switchNameHandler=()=>
    {
        console.log('Clicked')
        this.state.persons[0].name='Jack';
    }
  render ()
  {
    return (
        <div className="App">
            <Person name="Prashant" age="27">CI Developer </Person>
            <button onClick={this.switchNameHandler}>Switch Button</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        </div>
    );
  }
}
export default App;
