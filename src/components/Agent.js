import React from 'react'

function Agent({ agent, onAgentDelete }) {
  const {id, name, brokerage, email, phone_number} = agent

  function handleDelete() {
    fetch(`http://localhost:9492/agents/${id}`, {
      method: 'DELETE',
    })
    onAgentDelete(id)
  }

  return (
    <div>
      <h3>ID: {id}</h3>
      {name} with {brokerage}
      <br/>
      Email: {email}
      <br/>
      Phone: {phone_number}
      <button onClick={handleDelete}>Delete</button>
      <br/>
    </div>
  )
}

export default Agent