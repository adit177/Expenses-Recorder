import React,{useState}  from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
//import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
//import Card from './Card.js'

function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2021');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };

    const  filteredExpenses= props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    return (
        <div>        
        <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
            </div>
        </div>
    );
};
export default Expenses;
