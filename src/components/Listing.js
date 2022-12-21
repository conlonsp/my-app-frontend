import React from 'react'

function Listing({ home }) {

  const { address, price, square_feet, agent_id, created_at, updated_at } = home

  function handleDelete() {
    alert('do you want to delete?')
  }

  function handleUpdate() {
    alert('do you want to update')
  }

  return (
    <div>
      <br/>
      <div>
        {address} | Price: ${price} | Square Feet: {square_feet}
        <br/>
        Listed on: {created_at}
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Listing