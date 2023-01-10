import React, {useState} from 'react'

function Agent({ agent, onAgentDelete }) {
  const {id, name, brokerage, email, phone_number} = agent

  const [isClicked, setIsClicked] = useState(false)

  function handleDelete() {
    fetch(`http://localhost:9492/agents/${id}`, {
      method: 'DELETE',
    })
    onAgentDelete(id)
  }

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <div>
      <h1 onClick={handleClick}>🧳 {name}</h1>
      {isClicked ?
        <div>
          Brokerage: {brokerage}
          <br/>
          Email: {email}
          <br/>
          Phone: {phone_number}
          <button onClick={handleDelete}>Delete</button>
          <br/>
        </div>
        :
        null
      }
    </div>
  )
}

export default Agent