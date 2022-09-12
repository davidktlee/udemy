import { useState } from 'react'
const InputForm = ({ setViewModal, users, setUsers }) => {
  const [value, setValue] = useState({
    name: '',
    age: '',
  })

  const changeName = (e) => {
    // setNameInput(e.target.value)
    setValue({ ...value, name: e.target.value })
  }

  const changeAge = (e) => {
    setValue({ ...value, age: e.target.value })
  }
  const submit = () => {
    if (!value.length) {
      setViewModal(true)
      return
    }
    setUsers([...users, value])
  }

  return (
    <div>
      <label>
        USERNAME
        <input type="text" onChange={changeName} />
      </label>
      <label>
        AGE(YEARS)
        <input type="text" onChange={changeAge} />
      </label>
      <button onClick={submit}>ADD USER</button>
    </div>
  )
}
export default InputForm
