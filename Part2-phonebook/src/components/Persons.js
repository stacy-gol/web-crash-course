import Name from './Name'

const Persons = ({ personsToShow, deletePerson }) => {
    return (
        <ul>
            {personsToShow.map(person =>
                <Name key={person.id}
                    name={person.name}
                    phone={person.phone}
                    deletePerson={() => deletePerson(person.id)}
                    />)}
        </ul>
    )
}

export default Persons