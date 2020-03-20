import React from 'react';
import SomeClassComponent from './components/SomeClassComponent';
import PersonCard from './components/PersonCard';
import NewComponent from './components/NewComponent'
import logo from './logo.svg';
import './App.css';


const Button = (props) => {
  return (
// Remember -- props becomes an object containing all of the keys and values passed in from the parent component
      <button onClick={props.click}>{props.text}</button>
  );
}

function App() {
  return (
    <div className="App">
      
      <h2>hello, react</h2>
      <SomeClassComponent/>
      <PersonCard firstName = "Doe" lastName="Jane" age={45} hairColor="Black"/>
      <NewComponent/> 



      
    </div>
  );
}

export default App;
