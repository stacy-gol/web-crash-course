const Name = ({ name, phone, deletePerson }) => {
  return (
    <li>
      {name}
      {phone}
      <button onClick={deletePerson}>Delete</button>
    </li>
  )
}

export default Name