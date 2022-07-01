import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({listFiltered}) {
    
    if(listFiltered.length === 0){
        return <h2 className="expenses-list__fallback">No expense found for this year</h2>
    }

    return(
        <ul className="expenses-list">
        {
            listFiltered.map((expense) => (
                <ExpenseItem key={expense.title}
                             title={expense.title}
                             amount={expense.amount}
                             date={expense.date} />
              ))
        }
        </ul>
    )
}

export default ExpenseList