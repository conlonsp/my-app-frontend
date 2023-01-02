import React from 'react'

function AppointmentPostForm({ appointments, setAppointments }) {

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form>
        <label>Your Name: </label>
        <input
          type='text'
          name='name'
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