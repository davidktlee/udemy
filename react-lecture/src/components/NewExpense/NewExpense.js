import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = ({ addExpenseHandler }) => {
  const [idEdit, setisEdit] = useState(false)
  const onSaveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    console.log(expenseData)
    addExpenseHandler(expenseData)
  }
  const changeEdit = () => {
    setisEdit((prev) => !prev)
  }

  return (
    <div className="new-expense">
      {idEdit ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} changeEdit={changeEdit} />
      ) : (
        <button onClick={changeEdit}>Add new Expense</button>
      )}
    </div>
  )
}
export default NewExpense
