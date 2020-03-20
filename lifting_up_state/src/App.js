import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript','huanglin','helloworld']}/>
    </div>
  );
}

export default App;
