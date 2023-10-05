import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

import personService from './services/persons'
import FailMessage from './components/FailMessage'
import SuccessMessage from './components/SuccessMessage'



const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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

    if (originalPerson) {
      const dublicateCheck =
        window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`);
      if (dublicateCheck === true) {
        personService
          .update(originalPerson.id, { ...originalPerson, number: newNumber })
          .then((returnedPerson) => {
            setPersons(personsToShow.map(person => person.name !== newName ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
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
            setNewNumber('')
          })
      }
      else {
        setPersons(personsToShow)
        setNewName('')
        setNewNumber('')
      }
    } else {

      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setGreenMessage(`Added ${newName}`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setGreenMessage(null)
          }, 5000)
        })
        .catch(error => {setRedMessage(
          `Ошибка в создании пользователя: ${error.response.data.error}`
        )
        setTimeout(() => {
          setRedMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })

    }
  }

  const handleNameAdding = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAdding = (event) => {
    setNewNumber(event.target.value)
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
      <h2>Phonebook V1.1</h2>
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
          newNumber={newNumber}
          handleNumberAdding={handleNumberAdding} />
      </div>
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>

  )
}

export default App