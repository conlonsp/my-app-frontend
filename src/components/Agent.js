import React from 'react'

function Agent({ agent }) {
  const {id, name, brokerage, email, phone_number} = agent

  return (
    <div>
      {name} | ID #: {id}
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Agent