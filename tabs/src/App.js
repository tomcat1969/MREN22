import React from 'react';

import './App.css';
import {Tabs} from './components/Tabs'

function App() {
  return (
    <div className="App">
         <Tabs items={['home','friend','history','about']} contents={['home content','friend content','history content','about content']}/>
    </div>
  );
}

export default App;
