import React , {useContext} from 'react';
import {GlobalContext}  from '../context/State'

export const Transactions = ({transactions}) => {
    const { deletetrans } = useContext(GlobalContext);
    return (
        
            <li className = 'items'>{transactions.text} <span>${transactions.amount}</span><button onClick = {()=>deletetrans(transactions.id)} className = 'x-button'>x</button></li> 
        
    )
}
