import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component
{
  render ()
  {
    return (
        <div className="App">
        <Person name="Nishank" age="26"/>
        <Person name="Sagar" age="25"/>
        </div>
    );
  }
}
export default App;
