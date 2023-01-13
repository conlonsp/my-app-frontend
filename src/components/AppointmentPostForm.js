import React, { useState } from 'react'
import { Card, Button, Form } from 'semantic-ui-react'

function AppointmentPostForm({ appointments, setAppointments, home, agents }) {
  const [showForm, setShowForm] = useState(false)
  const [createAppointment, setCreateAppointment] = useState({
    scheduler: '',
    time: '',
    home_id: home.id,
    agent_id: 1,
  })

  function handleInputChange(event) {
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
    fetch(`http://localhost:9492/appointments`, {
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
      home_id: home.id,
      agent_id: 1,
    })
  }

  function handleShowForm() {
    setShowForm(!showForm)
  }

  return (
    <div style={{textAlign: 'center'}}>
      {!showForm ?
        <Button onClick={handleShowForm}>Schedule Appt</Button>
        :
        <Card style={{textAlign: 'center', width: '100%'}}>
          <h2>Schedule an Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <label>Your Name: </label>
            <input
              type='text'
              name='scheduler'
              placeholder='ex: Joe Shmoe'
              onChange={handleInputChange}
              value={createAppointment.scheduler}
            />
            <label>Date/Time: </label>
            <input
              type='text'
              name='time'
              placeholder='ex: January 01, 2023 06:31'
              onChange={handleInputChange}
              value={createAppointment.time}
            />
            <label>Agent: </label>
            <select name='agent_id' onChange={handleInputChange}>
              {agents.map(agent => {
                return (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                )
              })}
            </select>
            <Button style={{width: '100%'}} color='green'>Submit</Button>
          </Form>
          <Button onClick={handleShowForm} color='google plus'>Hide</Button>
        </Card>
      }
    </div>
  )
}

export default AppointmentPostForm