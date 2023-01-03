import React from 'react'
import Appointment from './Appointment'

function AppointmentContainer({ appointments, setAppointments, homes }) {

  function handleDeleteAppt(id) {
    const findAppt = appointments.filter(appointment => id !== appointment.id)
    setAppointments(findAppt)
  }

  return (
    <div className='item2'>
      <h2>Appointments</h2>
      {appointments.map(appt => {
      return (
        <Appointment key={appt.id} appt={appt} homes={homes} onApptDelete={handleDeleteAppt}/>
      )
    })}
    </div>
  )
}

export default AppointmentContainer