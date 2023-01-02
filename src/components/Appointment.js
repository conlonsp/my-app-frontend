import React from 'react'

function Appointment({ appt, homes }) {

  const { scheduler, time, home_id } = appt

  const findHomeByAppt = homes.find(home => home.id === home_id)

  console.log(findHomeByAppt.address)

  return (
    <div>
      {findHomeByAppt.address}
      {scheduler} at {time}
    </div>
  )
}

export default Appointment