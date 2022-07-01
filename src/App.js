import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react'

const DUMMY_EXPENSE_DATA = [
  {id: 1, title: "Car Insurance",amount: 299, date: new Date(2020,2,25)},
  {id: 1, title: "TV",amount: 150, date: new Date(2020,9,8)},
  {id: 1, title: "Groceries",amount: 154, date: new Date(2021,8,10)},
  {id: 1, title: "Hospital",amount: 500, date: new Date(2022,5,13)}
]

function App() {
  
  const [newExpense, setNewExpense] = useState(DUMMY_EXPENSE_DATA)

  const onExpenseFinalHandler = (expenseData) => {
    setNewExpense(prevExpense => {
       return [expenseData, ...prevExpense]
    })
  } 

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onSaveExpenseData={onExpenseFinalHandler} />
      <Expenses list={newExpense} />
    </div>
  );
}

export default App;
