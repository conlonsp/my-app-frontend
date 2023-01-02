import React from 'react'

function Appointment({ appt, homes }) {

  

  return (
    <div>
      {/* {findHomeByAppt.address} */}
      {appt.scheduler}
      <button>Delete</button>
    </div>

  )
}

export default Appointment