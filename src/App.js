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
    switchNameHandler=(newName,newAge)=>
    {
        console.log('Clicked')
        this.setState({
             persons :[
                 {name:newName , age:newAge},
                 {name:'martin',age:24},
                 {name:'john', age:25}
             ]
            })
        this.state.persons[0].name='Jack';
    }
    nameChangedHandler=(event)=>
    {
        this.setState({
        persons:[
            {name:'johny',age:34},
            {name:'mark',age:23},
            {name:'jack',age:24}
        ]
        })
    }
  render ()
  {
    return (
        <div className="App">
            <Person name="Prashant" age="27">CI Developer </Person>
            <button onClick={this.switchNameHandler.bind(this,'martin').bind(this,70)}>Switch Button</button>
            <Person changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this,'evon').bind(this,50)} name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        </div>
    );
  }
}
export default App;
