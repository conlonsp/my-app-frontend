import React from 'react'

function Listing({ home }) {

  const { address, price, square_feet, agent_id, created_at, updated_at } = home

  return (
    <div>
      <br/>
      <div>
        {address} | Price: ${price} | Square Feet: {square_feet}
        <br/>
        Listed on: {created_at}
      </div>
    </div>
  )
}

export default Listing