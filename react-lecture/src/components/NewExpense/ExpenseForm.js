import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = ({ onSaveExpenseData, changeEdit }) => {
  const [inputState, setInputState] = useState({
    id: '',
    title: '',
    amount: '',
    date: '',
  })
  const titleChangeHandler = (e) => {
    setInputState((prev) => {
      return { ...prev, title: e.target.value }
    })
  }
  const amountChangeHandler = (e) => {
    setInputState((prev) => {
      return { ...prev, amount: Number(e.target.value) }
    })
  }
  const dateChangeHandler = (e) => {
    setInputState((prev) => {
      return { ...prev, date: new Date(e.target.value) }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onSaveExpenseData(inputState)
    setInputState({ ...inputState, title: '', amount: '', date: '' })
    changeEdit()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputState.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputState.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2022"
            max="31-12-2022"
            value={inputState.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeEdit} type="submit">
          CANCEL
        </button>
        <button type="submit">ADD</button>
      </div>
    </form>
  )
}
export default ExpenseForm
