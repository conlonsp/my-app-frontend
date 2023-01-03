import React, {useState} from 'react'

function AgentPostForm({ agents, setAgents }) {
  const [showForm, setShowForm] = useState(false)
  const [createAgent, setCreateAgent] = useState({
    name: '',
    brokerage: '',
    email: '',
    phone_number: '',
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
    })
  }

  function handleShowForm() {
    setShowForm(!showForm)
  }

  return (
    <div className='item7'>
      {!showForm ?
        <button onClick={handleShowForm}>Register Agent</button>
        :
        <div>
          <h2>Register an Agent</h2>
          <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
          </form>
          <button onClick={handleShowForm}>Hide</button>
        </div>
      }
    </div>
  )
}

export default AgentPostForm