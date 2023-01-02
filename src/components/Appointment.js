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
      {scheduler} at {time} at {findHomeAddress}
      <button onClick={handleDelete}>Delete</button>
    </div>

  )
}

export default Appointment