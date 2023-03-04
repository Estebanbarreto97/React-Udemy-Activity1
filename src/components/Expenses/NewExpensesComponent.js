import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './NewExpensesComponent.css';


const NewExpensesComponent = (prop) =>{
    return (
        <Card className="expenses">
        
        {prop.lista.map((expense) => (
          <ExpenseItem 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
          />
        ))} 
        </Card>
    );
}

export default NewExpensesComponent;