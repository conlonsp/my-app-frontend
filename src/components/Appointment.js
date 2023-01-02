import React from 'react'

function Appointment({ appt, homes }) {

  console.log(appt)

  return (
    <div>
      {/* {findHomeByAppt.address} */}
      {appt.scheduler}
    </div>
  )
}

export default Appointment