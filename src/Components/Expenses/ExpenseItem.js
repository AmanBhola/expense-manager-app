import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React , { useState } from "react";

function ExpenseItem(data) {

  const [title,setTitle] = useState(data.title);
  
  
  function onClickHandler(){
      setTitle('Updated');
  };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate props={data.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${data.amount}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;

//3