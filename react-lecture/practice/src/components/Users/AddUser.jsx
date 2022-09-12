import { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from './../UI/Button'
const AddUser = (props) => {
  const [user, setUser] = useState({
    name: '',
    age: 0,
  })
  const changeUsername = (e) => {
    setUser({ ...user, name: e.target.value })
  }
  const changeUserAge = (e) => {
    setUser({ ...user, age: e.target.value })
  }
  const addUserHandler = (e) => {
    if (!user.name.trim() || !user.age.trim()) {
      alert('11')
      return
    }
    e.preventDefault()
    console.log(user)
    setUser({
      name: '',
      age: 0,
    })
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={user.name} onChange={changeUsername} />
        <label htmlFor="number">Age(years)</label>
        <input id="number " type="number" value={user.age} onChange={changeUserAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
