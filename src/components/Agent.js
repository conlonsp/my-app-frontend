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
      {name} | ID #: {id}
      <button>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Agent