import React from 'react';
import ExpenseForm from './ExpenseForm'

const AddExpensePage = () => (
    <div>
        Add Expense Component
        <ExpenseForm 
        onSubmit={(expense) => {
            console.log(expense);
        }}
        />
    </div>
);

export default AddExpensePage;