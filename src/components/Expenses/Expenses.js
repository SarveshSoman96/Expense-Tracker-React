import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses({ list }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onFilterChangeHandler = (filteredValue) => {
    setSelectedYear(filteredValue);
  };

  const yearFilteredList = list.filter(expense =>  {
    return expense.date.getFullYear().toString() === selectedYear
  }
  )

  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={selectedYear}
        onFilterChange={onFilterChangeHandler}
      />

    <ExpenseChart filteredExpenses={yearFilteredList} />
    <ExpenseList listFiltered={yearFilteredList} />
    </Card>
  );
}

export default Expenses;
