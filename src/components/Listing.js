import React, { useState } from 'react'
import AppointmentPostForm from './AppointmentPostForm'


function Listing({ home, onHomeDelete, onUpdateHome, appointments, setAppointments, agents }) {
  const { id, address, price, square_feet, image_url, } = home

  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedHome, setUpdatedHome] = useState({
    address: address,
    price: price,
    square_feet: square_feet,
    image_url: image_url
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
      image_url: updatedHome.image_url,
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
      image_url: updatedHome.image_url,
    })
  }

  return (
    <div>
      <br/>
      <div>
        <img src={image_url} width="320" height="240"/>
        {address} | Price: ${price} | Square Feet: {square_feet}
        <br/>
        Appointments: 
        {home.appointments.length > 0 ?
          home.appointments.map(appt => {
            return (
              <li>
                {appt.scheduler} | {appt.time}
              </li>
            )
          })
          :
          "No Appointments Scheduled"
        }
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
              <label>Image URL: </label>
              <input
                type='text'
                name='image_url'
                placeholder={image_url}
                onChange={handleChange}
                value={updatedHome.image_url}
              />
              <button>Submit</button>
            </form>
            <button onClick={handleUpdateButton}>Hide</button>
          </div>

        }
        <button onClick={handleDelete}>Delete</button>
      </div>
      <AppointmentPostForm
        home={home}
        appointments={appointments}
        setAppointments={setAppointments}
        agents={agents}
      />
    </div>
  )
}

export default Listing