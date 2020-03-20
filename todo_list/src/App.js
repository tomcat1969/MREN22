import React from 'react';
import {Parent} from './components/TestDemo'

import './App.css';
import {TodoItem} from './components/TodoItem'
import { TodolistApp} from './components/MytodoList';

function App() {
  return (
    <div className="App">
        <TodoItem/>
         <p>****************************</p>
          <Parent/>

         <p>****************************</p>

         <TodolistApp/>
         
    </div>
  );
}

export default App;
