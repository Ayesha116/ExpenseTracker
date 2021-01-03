//import { Children } from 'react';
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialstate = {
    transactions : [
        // { id : '1' , text : 'book' , amount : -200},
        // {  id : '2' , text : 'credit' , amount : +100},
        // {  id : '3' , text : 'pay' , amount : +20000}
    ]
}



export const GlobalContext = createContext(initialstate);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  function deletetrans(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload : id
    });
  }
  function addtrans(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deletetrans,
    addtrans,
  }}>
    {children}
  </GlobalContext.Provider>);
}




// Initial state
// const initialState = {
//   transactions: []
// }

// Create context
// export const GlobalContext = createContext(initialstate);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialstate);

//   // Actions
//   function deletetrans(id) {
//     dispatch({
//       type: 'DELETE_TRANS',
//       payload: id
//     });
//   }

//   function addtrans(transaction) {
//     dispatch({
//       type: 'ADD_TRANS',
//       payload: transaction
//     });
//   }

//   return (<GlobalContext.Provider value={{
//     transactions: state.transactions,
//     deletetrans,
//     addtrans
//   }}>
//     {children}
//   </GlobalContext.Provider>);
// }