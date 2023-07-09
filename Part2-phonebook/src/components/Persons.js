import Name from './Name'

const Persons = ({ personsToShow }) => {

    return (
        <ul>
            {personsToShow.map(person =>
                <Name key={person.id}
                    name={person.name} phone={person.phone} />)}
        </ul>
    )
}

export default Persons