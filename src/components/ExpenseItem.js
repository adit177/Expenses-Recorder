import React, { useState } from 'react';
import './ExpenseItem.css';
//import Card from './Card'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    
    // const [title, setTitle]   = useState(props.title);
    // //title=props.title;
    // const clickHandler=()=>{
    //     setTitle('Updated!');
    // }
    return (
    <div className="expense-item" >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button  >Change Title</button>
    </div>
    );
};

export default ExpenseItem;