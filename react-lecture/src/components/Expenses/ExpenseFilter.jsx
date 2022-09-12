import './ExpenseFilter.css'

const ExpenseFilter = ({ filterChangeHandler, filteredState }) => {
  const selectChangeHandler = (e) => {
    filterChangeHandler(e.target.value)
  }
  return (
    <div className="expenses-filter">
      <label>
        <select
          value={filteredState}
          className="expenses-filter__control"
          onChange={selectChangeHandler}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </label>
    </div>
  )
}
export default ExpenseFilter
