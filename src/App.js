import "./App.css";
import NewExpense from "./Components/Expenses/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import { useState } from "react";

 const DummyData = [
   {
     id: 1,
     title: "Car Insurance",
     amount: 150,
     date: new Date(2021, 2, 28),
   },
   {
     id: 2,
     title: "Bike Insurance",
     amount: 15,
     date: new Date(2021, 20, 28),
   },
   {
     id: 3,
     title: "Car Service",
     amount: 12,
     date: new Date(2021, 12, 8)
   }
 ];

function App() {
 
const [expenseDetails, setExpenseDetails]=useState(DummyData);


  function onAddExpenseHandler(expense){

    //console.log('In APP.js');
    setExpenseDetails([expense,...expenseDetails]);
    
  }
  

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses data={expenseDetails} />
    </div>
  );
}

export default App;

//1
