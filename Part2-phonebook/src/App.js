import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [personSearched, setSearch] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return false;
    }
    const newPerson = {
      name: newName,
      phone: newPhone
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

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = personSearched === ''
    ? persons
    : persons.filter((person) => person.name.includes(personSearched))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter personSearched={personSearched} handleSearch={handleSearch}/>
      <PersonForm addPerson={addPerson} newName={newName} handleNameAdding={handleNameAdding} 
      newPhone={newPhone} handlePhoneAdding={handlePhoneAdding} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>

  )
}

export default App