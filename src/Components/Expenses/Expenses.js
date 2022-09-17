import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");
  function onChangeFilterHandler(year) {
    setFilterYear(year);
  }

  const expenseDetails = props.data;

  const filteredExpenses = expenseDetails.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //console.log(expenseFilteredDetails);

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;

//2
