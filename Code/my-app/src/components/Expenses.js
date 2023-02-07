import React from 'react';
import './Expenses.css'

const Expenses = () => {

    const expense_date= new Date(2023, 2, 7);
    const expense_heading = "Car Insurance";
    const expense_price = "$38.8";

  return (
    <div className='expense-item'>
        <div className='expense-date'>{expense_date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expense_heading}</h2>
            <div className='expense-item__price'>{expense_price}</div>
        </div>
    </div>
  )
}

export default Expenses