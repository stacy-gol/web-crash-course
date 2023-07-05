import { useState } from 'react'
import Name from './components/Name'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name:newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameAdding = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameAdding}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <Name key={person.name} name={person.name}/>)}
      </ul>
    </div>
    
  )
}

export default App