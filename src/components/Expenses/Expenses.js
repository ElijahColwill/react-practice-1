import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const selectYearHandler = (selectedYear) => {
        setYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    defaultSelect={year} 
                    onSelectYear={selectYearHandler} 
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;