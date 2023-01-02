import React, { useState } from 'react'

function AppointmentPostForm({ appointments, setAppointments }) {
  const [createAppointment, setCreateAppointment] = useState({
    scheduler: '',
    time: '',
    home_id: '',
    agent_id: '',
  })

  function handleChange(event) {
    setCreateAppointment({
      ...createAppointment,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form>
        <label>Your Name: </label>
        <input
          type='text'
          name='scheduler'
          placeholder='ex: Joe Shmoe'
        />
        <label>Date/Time: </label>
        <input
          type='text'
          name='time'
          placeholder='ex: January 01, 2023 06:31'
        />
        <label>Home ID: </label>
        <input
          type='text'
          name='home_id'
          placeholder='ex: 7'
        />
        <label>Agent ID: </label>
        <input
          type='text'
          name='agent_id'
          placeholder='ex: 13'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AppointmentPostForm