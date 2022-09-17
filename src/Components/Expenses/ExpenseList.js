import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;

//   props.items.length === 0 ? (
//     <p>No Expnese Found</p>
//   ) : (
//     props.items.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         date={expense.date}
//         amount={expense.amount}
//       />
//     ))
//   );
