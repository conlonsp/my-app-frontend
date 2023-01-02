import React from 'react'

function Appointment({ appt }) {

  const {scheduler, time} = appt

  return (
    <div>
      {scheduler} at {time}
    </div>
  )
}

export default Appointment