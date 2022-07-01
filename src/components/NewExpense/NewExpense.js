import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const saveExpenseDataHabdler = (newSavedExpenseData) => {
      const expenseDataObj = {
        ...newSavedExpenseData
      };

      props.onSaveExpenseData(expenseDataObj);
  }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHabdler} />
    </div>
  )
}

export default NewExpense