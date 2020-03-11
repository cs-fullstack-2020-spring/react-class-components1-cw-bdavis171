import React from 'react';
import './App.css';
import SayHello from './components/SayHello';
import SayHowdy from './components/SayHowdy';

function App() {
  return (
    <div className="App">
      <SayHello/>
      <SayHowdy/>
    </div>
  );
}

export default App;
