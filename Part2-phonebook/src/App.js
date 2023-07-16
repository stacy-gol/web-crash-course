import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

import personService from './services/persons'
import FailMessage from './components/FailMessage'
import SuccessMessage from './components/SuccessMessage'



const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [personSearched, setSearch] = useState('')
  const [persons, setPersons] = useState([])
  const [greenMessage, setGreenMessage] = useState(null)
  const [redMessage, setRedMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const originalPerson = persons.find(n => n.name === newName)
  console.log('add person', persons, newName, originalPerson);

    if (originalPerson) {
      const dublicateCheck =
        window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`);
      if (dublicateCheck === true) {
        console.log('request');
        personService
          .update(originalPerson.id, { ...originalPerson, phone: newPhone })
          .then((returnedPerson) => {
            console.log('returnedPerson', returnedPerson)
            setPersons(personsToShow.map(person => person.name !== newName ? person : returnedPerson))
            setNewName('')
            setNewPhone('')
            setGreenMessage(`Phone was updated!`)
            setTimeout(() => {
            setGreenMessage(null)
            }, 5000)
          })
          .catch(error => {setRedMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setRedMessage(null)
            }, 5000)
            setNewName('')
            setNewPhone('')
          })
      }
      else {
        setPersons(personsToShow)
        setNewName('')
        setNewPhone('')
      }
    } else {

      const newPerson = {
        name: newName,
        phone: newPhone
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setGreenMessage(`Added ${newName}`)
          setNewName('')
          setNewPhone('')
          setTimeout(() => {
            setGreenMessage(null)
          }, 5000)
        })

    }
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
    : persons.filter((person) => person.name.toLowerCase().includes(personSearched.toLowerCase()))

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    const confirmWindowForDelete = window.confirm(`Delete ${person.name}?`)

    if (confirmWindowForDelete === true) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons((personsToShow.filter(person => person.id !== id)))
        })
    } else {
      return personsToShow
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMessage message={greenMessage}></SuccessMessage>
      <FailMessage message={redMessage}></FailMessage>
      <p>filter with:</p>
      <Filter
        personSearched={personSearched}
        handleSearch={handleSearch} />
      <div>
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameAdding={handleNameAdding}
          newPhone={newPhone}
          handlePhoneAdding={handlePhoneAdding} />
      </div>
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>

  )
}

export default App