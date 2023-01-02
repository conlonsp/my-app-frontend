import React from 'react'
import Appointment from './Appointment'

function AppointmentContainer({ appointments, homes }) {

  return (
    <div>
      {appointments.map(appt => {
      return (
        <Appointment key={appt.id} appt={appt} homes={homes}/>
      )
    })}
    </div>
  )
}

export default AppointmentContainer