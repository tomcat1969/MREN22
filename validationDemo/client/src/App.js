import React from 'react';

import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="authors/"/>
        <NewAuthor path="author/"/>
        <Update path="authors/:id/edit"/>

      </Router>
      
    </div>
  );
}

export default App;
