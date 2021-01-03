import React , { useContext } from 'react';
import '../App.css';
import {GlobalContext} from '../context/State';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const balance = transactions.map(transaction=>transaction.amount)
    const total = balance.reduce(function(acc, val) { return acc + val; }, 0)

    return (
        <div className = 'balance'>
            <h2 >Your Balance:</h2>
            <h2>${total}</h2> 
        </div>
  
        
    )
}
