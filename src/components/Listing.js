import React, { useState } from 'react'

function Listing({ home, onHomeDelete, homes, setHomes }) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedHome, setUpdatedHome] = useState({
    address: '',
    price: '',
    square_feet: '',
    agent_id: '',
  })

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

  function handleChange(event) {
    setUpdatedHome({
      ...updatedHome,
      [event.target.name]: event.target.value
    })
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
              placeholder={address}
              onChange={handleChange}
              value={updatedHome.address || address}
            />
            <label>Price: </label>
            <input
              type='text'
              name='price'
              placeholder={price}
              onChange={handleChange}
              value={updatedHome.price || price}
            />
            <label>Square Feet: </label>
            <input
              type='text'
              name='square_feet'
              placeholder={square_feet}
              onChange={handleChange}
              value={updatedHome.square_feet || square_feet}
            />
            <label>Agent ID #: </label>
            <input
              type='text'
              name='agent_id'
              placeholder={agent_id}
              onChange={handleChange}
              value={updatedHome.agent_id || agent_id}
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