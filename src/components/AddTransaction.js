import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const {addTransaction} = useContext(GlobalContext)

    const submit = (e) =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: + amount
        }
        addTransaction(newTransaction)

        setText("");
        setAmount("")
       
    }


    return (
        <div className="transaction">
            <h3>Transaction</h3>
            <form className="form" onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Add Transaction</label>
                    <input type='text' placeholder="Enter text..."
                    value={text} onChange={(e) =>setText(e.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Add Amount</label>
                    <p>(NOTE:for expense add negative sign to the amount(- amount))</p>
                    <input type='number' placeholder="Enter number..."
                    value={amount} onChange={(e) =>setAmount(e.target.value)} />
                </div>
                <button className="transaction-btn">Add Transaction</button>
               


            </form>
            
        </div>
    )
}

export default AddTransaction
