import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import Header from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { Newtransactions } from './components/Newtransactions';
import { History } from './components/History';
import { GlobalProvider } from './context/State';
function App() {
  return (
    <div className = 'body'>
      <GlobalProvider >
        <Header></Header>
        <br/>
        <div className = 'container' >
          <Balance></Balance>
          <IncomeExpense></IncomeExpense>
          <History></History>
          <Newtransactions></Newtransactions>
        </div>
      
      </GlobalProvider>
    </div>
    
  
  
  );
}

export default App;
