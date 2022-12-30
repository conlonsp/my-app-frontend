import React, { useState } from 'react'

function Listing({ home, onHomeDelete }) {
  const [isUpdate, setIsUpdate] = useState(false)

  const { id, address, price, square_feet, agent_id, created_at, updated_at } = home

  function handleDelete() {
    alert('do you want to delete?')
    fetch(`http://localhost:9492/homes/${id}`, {
      method: 'DELETE',
    })
    onHomeDelete(id)
  }

  function handleUpdateButton() {
    setIsUpdate(!isUpdate)
  }

  return (
    <div>
      <br/>
      <div>
        {address} | Price: ${price} | Square Feet: {square_feet}
        <br/>
        Listed on: {created_at}
        {!isUpdate ?
          <button onClick={handleUpdateButton}>Update</button>
          :
          <form>
            <label>Address: </label>
            <input
              type='text'
              name='address'
              placeholder={home.address}
            />
            <label>Price: </label>
            <input
              type='text'
              name='price'
              placeholder={home.price}
            />
            <label>Square Feet: </label>
            <input
              type='text'
              name='square_feet'
              placeholder={home.square_feet}
            />
            <label>Agent ID #: </label>
            <input
              type='text'
              name='agent_id'
              placeholder={home.agent_id}
            />
            <button>Submit</button>
          </form>
        }
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Listing