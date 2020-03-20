import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'
import StatefulComponent from './components/StatefulComponent'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
     
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
      <button className="button" > this is a button</button>
      <StatefulComponent />

    </div>
  );
}

export default App;
