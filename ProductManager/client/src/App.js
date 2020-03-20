import React from 'react';
// import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      
        <Main path="products/"/>
        <Detail path="products/:id" />
      
    </div>
  );
}
export default App;
