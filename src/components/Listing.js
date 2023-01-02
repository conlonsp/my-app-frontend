import React, { useState } from 'react'
import Appointment from './Appointment'

function Listing({ home, onHomeDelete, onUpdateHome }) {
  const { id, address, price, square_feet, agent_id, created_at, updated_at, appointments } = home

  console.log(appointments)

  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedHome, setUpdatedHome] = useState({
    address: address,
    price: price,
    square_feet: square_feet,
    agent_id: agent_id,
  })

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
        }
        <button onClick={handleDelete}>Delete</button>
      </div>
      {appointments.map(appt => <Appointment />)} 
    </div>
  )
}

export default Listing