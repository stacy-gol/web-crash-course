const Name = ({ name, number, deletePerson }) => {
  return (
    <li>
      {name}: {' '}
      <b>{number}</b>{' '}
      <button onClick={deletePerson}>Delete</button>
    </li>
  )
}

export default Name