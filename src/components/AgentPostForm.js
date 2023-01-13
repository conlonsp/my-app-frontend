import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'

function AgentPostForm({ agents, setAgents }) {
  const [showForm, setShowForm] = useState(false)
  const [createAgent, setCreateAgent] = useState({
    name: '',
    brokerage: '',
    email: '',
    phone_number: '',
    profile_pic: '',
  })

  function handleChange(event) {
    setCreateAgent({
      ...createAgent,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newAgent = {
      name: createAgent.name,
      brokerage: createAgent.brokerage,
      email: createAgent.email,
      phone_number: createAgent.phone_number,
      profile_pic: createAgent.profile_pic,
    }
    fetch("http://localhost:9492/agents", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAgent)
    })
    .then(r => r.json())
    .then(data => setAgents([...agents, data]))
    setCreateAgent({
      name: '',
      brokerage: '',
      email: '',
      phone_number: '',
      profile_pic: '',
    })
  }

  function handleShowForm() {
    setShowForm(!showForm)
  }

  return (
    <div className='item7'>
      {!showForm ?
        <Button onClick={handleShowForm} color='linkedin' style={{width: '100%'}}>Register Agent</Button>
        :
        <div style={{width: '50%'}}>
          <h2>Register an Agent</h2>
          <Button onClick={handleShowForm} style={{width: '100%'}} color='google plus'>Hide</Button>
          <Form onSubmit={handleSubmit}>
            <br/>
            <label>Agent Name: </label>
            <input
              type='text'
              name='name'
              placeholder='ex: Joe Shmoe'
              onChange={handleChange}
              value={createAgent.name}
            />
            <label>Brokerage: </label>
            <input
              type='text'
              name='brokerage'
              placeholder='ex: Brokerage Real Estate'
              onChange={handleChange}
              value={createAgent.brokerage}
            />
            <label>Email: </label>
            <input
              type='text'
              name='email'
              placeholder='ex: email@email.com'
              onChange={handleChange}
              value={createAgent.email}
            />
            <label>Phone #: </label>
            <input
              type='text'
              name='phone_number'
              placeholder='ex: 1112223333'
              onChange={handleChange}
              value={createAgent.phone_number}
            />
            <label>Profile Pic URL: </label>
            <input
              type='text'
              name='profile_pic'
              placeholder='ex: www.profile-pic.com'
              onChange={handleChange}
              value={createAgent.profile_pic}
            />
            <Button style={{width: '100%'}} color='green'>Submit</Button>
          </Form>
          
        </div>
      }
    </div>
  )
}

export default AgentPostForm