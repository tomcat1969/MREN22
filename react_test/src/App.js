import React from 'react';

import './App.css';
import {MyComponent} from './components/MyComponent'
import {MyButton} from './components/MyButton'

function App() {
  return (
    <div className="App">
      <MyComponent movies = {['morma holiday','titanic','american lover','friends']} />

      <MyButton/>
    </div>
  );
}

export default App;

