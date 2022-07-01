import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const Expense = [
    {id: 1, title: "Car Insurance",amount: 299, date: new Date(2022,2,25)},
    {id: 1, title: "TV",amount: 150, date: new Date(2022,9,8)},
    {id: 1, title: "Groceries",amount: 154, date: new Date(2022,8,10)},
    {id: 1, title: "Hospital",amount: 500, date: new Date(2022,5,13)}
  ]

  const onExpenseFinalHandler = (expenseData) => {
    console.log(expenseData);
  } 

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onSaveExpenseData={onExpenseFinalHandler} />
      <Expenses list={Expense} />
    </div>
  );
}

export default App;
