const PersonForm = ( {addPerson, newName, handleNameAdding, newNumber, handleNumberAdding} ) => {
    return(
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameAdding}/>
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberAdding}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>  

    )
}

export default PersonForm