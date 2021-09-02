import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map((transaction => transaction.amount))
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)

    const expense =(
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)

    return (
        <div className="income-expense">
            <div className="income">
            <h4>INCOME</h4>
            <h5>${income}</h5>
            </div>

            <div className="expense">
            <h4>EXPENSE</h4>
            <h5>-${expense}</h5>
            </div>
            
        </div>
    )
}

export default IncomeExpense
