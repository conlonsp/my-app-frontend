import React from 'react'

function Appointment({ appt, homes, onApptDelete }) {
  const {id, scheduler, time} = appt

  function handleDelete() {
    fetch(`http://localhost:9492/appointments/${id}`, {
      method: 'DELETE',
    })
    onApptDelete(id)
  }

  return (
    <div>
      {/* {findHomeByAppt.address} */}
      {scheduler}
      <button onClick={handleDelete}>Delete</button>
    </div>

  )
}

export default Appointment