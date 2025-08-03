import React from 'react';
import logo from './logo.svg';
import './App.css';
import VehicleConfig from './components/VehicleConfig';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>GenAI Vehicle Configurator</h1>
      <VehicleConfig />
    </div>
  );
}

export default App;
