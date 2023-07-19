const Name = ({ name, phone, deletePerson }) => {
  return (
    <li>
      {name}: {' '}
      <b>{phone}</b>{' '}
      <button onClick={deletePerson}>Delete</button>
    </li>
  )
}

export default Name