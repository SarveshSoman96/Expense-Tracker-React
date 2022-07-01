import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react"

function Expenses({list}) {

  const [selectedYear, setSelectedYear] = useState("2019");

  const onFilterChangeHandler = (filteredValue) => {
      setSelectedYear(filteredValue)
  }

  return (
    <Card className="expenses">
        <ExpenseFilter defaultYear={selectedYear} onFilterChange = {onFilterChangeHandler} />
        <ExpenseItem title={list[0].title} amount={list[0].amount} date={list[0].date} />
        <ExpenseItem title={list[1].title} amount={list[1].amount} date={list[1].date} />
        <ExpenseItem title={list[2].title} amount={list[2].amount} date={list[2].date} />
        <ExpenseItem title={list[3].title} amount={list[3].amount} date={list[3].date} />
    </Card>
  )
}

export default Expenses;