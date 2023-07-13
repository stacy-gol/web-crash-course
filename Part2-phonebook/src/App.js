import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

import personService from './services/persons'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [personSearched, setSearch] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


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
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })

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
      <Filter personSearched={personSearched} handleSearch={handleSearch} />
      <PersonForm addPerson={addPerson} newName={newName} handleNameAdding={handleNameAdding}
        newPhone={newPhone} handlePhoneAdding={handlePhoneAdding} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>

  )
}

export default App