import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtered = props.items.filter((data) => data.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
