import React from 'react';
import './App.css';
import BankAccount from './components/BankAccount';

function App() {
  return (
    <div className="App">
      <BankAccount customerName = 'Brandon' balance = '$1000.99'/>
    </div>
  );
}

export default App;
