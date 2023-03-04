import ExpenseItem from './ExpenseItem';
import './NewExpensesComponent.css';


function NewExpensesComponent(prop){
    return (
        <div className="expenses">
        
        {prop.lista.map((expense) => (
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
        />
      ))} 
        </div>
    );
}

export default NewExpensesComponent;