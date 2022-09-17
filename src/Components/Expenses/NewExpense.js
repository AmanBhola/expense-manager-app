import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){

    const [isEditing, setIsEditing]= useState(false); 

    function submitExpenseDataHandler(expenseDataReceived){

        const expenseData={
            ...expenseDataReceived,
            id: Math.random().toString()
        };
    //  console.log(expenseData);

     props.onAddExpense(expenseData);
     //setIsEditing(false); //Here also we can do or in ExpenseForm.js onSubmitExpenseForm Function.

    }
    
    function onClickStartEditing(){
        setIsEditing(true);
    }

    function onClickStopEditing(){
        setIsEditing(false);
    }

    return( 
    <div className="new-expense">

       {!isEditing && <button onClick={onClickStartEditing}>Add New Expense</button>}

       {isEditing && <ExpenseForm stopEditing={onClickStopEditing} onSubmitExpenseData={submitExpenseDataHandler}/>}
    </div>
    );
}

export default NewExpense;