import React from 'react'
import "./App.css"
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  

  return (
 <div className="container">
   
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      
    </GlobalProvider>
</div>
  )
}

export default App
