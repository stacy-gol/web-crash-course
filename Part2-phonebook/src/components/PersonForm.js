const PersonForm = ( {addPerson, newName, handleNameAdding, newPhone, handlePhoneAdding} ) => {
    return(
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

    )
}

export default PersonForm