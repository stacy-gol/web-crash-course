import { useState } from 'react'
import Name from './components/Name'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '9999999' }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
        window.alert(`${newName} is already added to phonebook`);
        return false;
    }
    const newPerson = {
      name:newName,
      phone:newPhone
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const handleNameAdding = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneAdding = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameAdding}/>
        </div>
        <div>
        phone: <input value={newPhone} onChange={handlePhoneAdding}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <Name key={person.name} name={person.name} phone={person.phone}/>)}
      </ul>
    </div>
    
  )
}

export default App