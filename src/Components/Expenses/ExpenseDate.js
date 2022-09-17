import "./ExpenseDate.css";

function ExpenseDate(data){

    const month = data.props.toLocaleString('en-US',{month: 'long'})
    const day= data.props.toLocaleString('en-US',{ day:'2-digit'});
    const year = data.props.getFullYear();
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );
}
export default ExpenseDate;

//4