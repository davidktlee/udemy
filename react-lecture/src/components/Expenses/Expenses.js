import React, { useState } from 'react'

import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const { items } = props
  const [filteredState, setFilteredState] = useState('2020')
  const filterChangeHandler = (year) => {
    setFilteredState(year)
    console.log(items.map((item) => item.date))
  }
  const filteredExpense = items.filter((item) => {
    return String(item.date.getFullYear()) === filteredState
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredState} filterChangeHandler={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList filteredExpense={filteredExpense} />
      </Card>
    </div>
  )
}

export default Expenses
