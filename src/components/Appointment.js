import React from 'react'

function Appointment({ appt, homes, onApptDelete }) {
  const {id, scheduler, time, home_id} = appt

  function handleDelete() {
    fetch(`http://localhost:9492/appointments/${id}`, {
      method: 'DELETE',
    })
    onApptDelete(id)
  }

  const findHomeAddress = homes.find(home => home.id === home_id).address

  return (
    <div>
      <h4>Appointment for:</h4>
      {scheduler} at {time}
      <br/>
      {findHomeAddress}
      <button onClick={handleDelete}>Delete</button>
    </div>

  )
}

export default Appointment