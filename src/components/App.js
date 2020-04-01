import React from 'react';
import './../stylesheets/components/App.css';

import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
     <Pokedex />
    </div>
  );
}

export default App;
