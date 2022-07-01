import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react"

function NewExpense(props) {

  const [editForm, setEditForm] = useState(false);

  const saveExpenseDataHabdler = (newSavedExpenseData) => {
      const expenseDataObj = {
        ...newSavedExpenseData
      };

      props.onSaveExpenseData(expenseDataObj);
  }

  const formEditableHandler = () => {
    setEditForm(true)
  }

  const formCanceleditingHandler = () => {
    setEditForm(false)
  }

  return (
    <div className="new-expense">
      {!editForm && <button onClick={formEditableHandler}>Add new expense</button>}
      {editForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHabdler} onCancel={formCanceleditingHandler} />}
    </div>
  )
}

export default NewExpense