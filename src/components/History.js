import React from 'react'
import '../App.css';
import { useContext } from 'react';
import {GlobalContext} from '../context/State';
import {Transactions} from './Transactions'
export const History = () => {
    const {transactions} = useContext(GlobalContext)
    // console.log(context)
    return (
        <div className = 'history'>
            <h3 className = 'historyheading'>History</h3><hr/>
            <ul className = 'list'>
                {transactions.map(transactions => (<Transactions key = {transactions.id} transactions = {transactions}></Transactions>))}
            </ul>  
        </div>
    )
}
