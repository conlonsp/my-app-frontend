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

  function handleSubmit(event) {
    event.preventDefault()
    const newAppt = {
      scheduler: createAppointment.scheduler,
      time: createAppointment.time,
      home_id: createAppointment.home_id,
      agent_id: createAppointment.agent_id
    }
    fetch("http://localhost:9492/agents", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppt)
    })
    .then(r => r.json())
    .then(data => setAppointments([...appointments, data]))
    setCreateAppointment({
      scheduler: '',
      time: '',
      home_id: '',
      agent_id: '',
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