import React from 'react'
import Appointment from './Appointment'

function AppointmentContainer({ appointments, homes }) {

  return (
    <div>
      {appointments.map(appt => {
      return (
        <Appointment key={appt.id} appt={appt} />
      )
    })}
    </div>
  )
}

export default AppointmentContainer