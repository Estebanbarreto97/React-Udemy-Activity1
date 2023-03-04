import ExpenseItem from './ExpenseItem';
import './NewExpensesComponent.css';


function NewExpensesComponent(prop){
    return (
        <div className="expenses">
            <ExpenseItem 
                title={prop.title} 
                amount={prop.amount} 
                date={prop.date}>
            </ExpenseItem>
        </div>
    );
}

export default NewExpensesComponent;