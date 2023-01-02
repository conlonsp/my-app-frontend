import React, {useState} from 'react'

function AgentPostForm({ agents, setAgents }) {
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
  }

  return (
    <div>
      <h2>Register an Agent</h2>
      <form>
        <label>Agent Name: </label>
        <input
          type='text'
          name='name'
          placeholder='ex: Joe Shmoe'
        />
        <label>Brokerage: </label>
        <input
          type='text'
          name='brokerage'
          placeholder='ex: Brokerage Real Estate'
        />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='ex: email@email.com'
        />
        <label>Phone #: </label>
        <input
          type='text'
          name='phone_number'
          placeholder='ex: 1112223333'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AgentPostForm