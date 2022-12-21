import React from 'react'

function Agent({ agent }) {
  const {id, name, brokerage, email, phone_number} = agent

  return (
    <div>
      {name} | ID #: {id}
    </div>
  )
}

export default Agent