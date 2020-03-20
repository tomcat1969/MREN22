import React from 'react';

import './App.css';
import { Navbar } from './components/Navbar';
import {PokemonApi} from './components/PokemonApi'
import {PokemonApi2} from './components/PokemonApi2'
function App() {
  return (
    <div className="App">
      <Navbar/>

      <p>******************</p>
      <PokemonApi2/>
      
    </div>
  );
}

export default App;
