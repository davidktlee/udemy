const ViewUsers = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <li key={user.name}>
          <span>{user.name}</span>
          <span>({user.age})</span>
        </li>
      ))}
    </div>
  )
}
export default ViewUsers
