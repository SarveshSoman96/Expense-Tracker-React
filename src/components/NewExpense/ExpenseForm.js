import "./ExpenseForm.css";
import { useState } from "react";


function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const enteredTitleHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const enteredAmountHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const enteredDateHandler= (event) => {
        setEnteredDate(event.target.value)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault()

        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
        };

        props.onSaveExpenseData(enteredData)

        setEnteredTitle("");  
        setEnteredAmount("");
        setEnteredDate("");
    };


  return (
    <form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={enteredTitleHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="number" value={enteredAmount} min="2" step="0.02" onChange={enteredAmountHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={enteredDateHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm