import React, { useContext }from 'react'
// import App from '../App'
import '../App.css';
import {GlobalContext} from '../context/State';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction=>transaction.amount)
    const positive = amount.filter(function (a) { return a >= 0; })
    const income = positive.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const negative = amount.filter(function (a) { return a <= 0; })
    console.log(negative)
    const expense = negative.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className = 'incomeexpense'>
            <div className = 'income ie'>
                <h3 className = 'incomeheading'>INCOME</h3>
                <h2 className = 'incomenumber'>${income}</h2>
            </div>
            <div className ='expense ie' >
                <h3 className = 'expenseheading'>EXPENSE</h3>
                <h2 className = 'expensenumber'>${expense}</h2>
            
            </div>
        </div>
    )
}
