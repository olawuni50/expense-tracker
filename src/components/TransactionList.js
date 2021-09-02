import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'


const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

    const renderTransaction = transactions.map((transaction =>{
        return(
            <Transaction key={transaction.id} transaction={transaction}/>
        )
    }))
    
    
    return (
        <div className="history">
            <h3>History</h3>
            <ul className='list'>
                {/* {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))} */}
                {renderTransaction}
                
            </ul>
            
        </div>
    )
}

export default TransactionList
