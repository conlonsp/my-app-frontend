import React, { useState } from 'react'

function Listing({ home, onHomeDelete, onUpdateHome }) {
  const { id, address, price, square_feet, agent_id, created_at, updated_at, appointments } = home

  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedHome, setUpdatedHome] = useState({
    address: address,
    price: price,
    square_feet: square_feet,
    agent_id: agent_id,
  })

  function handleDelete() {
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

  function handleUpdateSubmit(event) {
    event.preventDefault()
    const newUpdate = {
      address: updatedHome.address,
      price: updatedHome.price,
      square_feet: updatedHome.square_feet,
      agent_id: updatedHome.agent_id,
    }
    fetch(`http://localhost:9492/homes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUpdate)
    })
    .then(r => r.json())
    .then(data => onUpdateHome(data))
    setUpdatedHome({
      address: updatedHome.address,
      price: updatedHome.price,
      square_feet: updatedHome.square_feet,
      agent_id: updatedHome.agent_id,
    })
  }
  console.log(home)

  return (
    <div>
      <br/>
      <div>
        <h3>House ID: {id}</h3>
        <br/>
        {address} | Price: ${price} | Square Feet: {square_feet}
        <br/>
        Updated: {updated_at}
        {!isUpdate ?
          <button onClick={handleUpdateButton}>Update</button>
          :
          <div>
            <form onSubmit={handleUpdateSubmit}>
              <label>Address: </label>
              <input
                type='text'
                name='address'
                placeholder={address}
                onChange={handleChange}
                value={updatedHome.address}
              />
              <label>Price: </label>
              <input
                type='text'
                name='price'
                placeholder={price}
                onChange={handleChange}
                value={updatedHome.price}
              />
              <label>Square Feet: </label>
              <input
                type='text'
                name='square_feet'
                placeholder={square_feet}
                onChange={handleChange}
                value={updatedHome.square_feet}
              />
              <label>Agent ID #: </label>
              <input
                type='text'
                name='agent_id'
                placeholder={agent_id}
                onChange={handleChange}
                value={updatedHome.agent_id}
              />
              <button>Submit</button>
            </form>
            <button onClick={handleUpdateButton}>Hide</button>
          </div>

        }
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Listing