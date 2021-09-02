import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const {id, text, amount} = props.transaction
    const sign = amount < 0 ? "-" : "+"

    return (
        <li className={amount < 0 ? "minus":"plus"}>
                    {text} <span>{sign}${Math.abs(amount)}</span> <button  onClick={() =>deleteTransaction(id)}
                    className="delete-btn">x</button> 
                    {/* <button onClick={() =>findItem(id)} className={amount > 0 ? "edit-btn": "edit-minus"}>Edit</button> */}
                    
                </li>
    )
}

export default Transaction
