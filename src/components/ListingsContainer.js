import React from 'react'
import Listing from './Listing'

function ListingsContainer({ homes, onHomeDelete }) {
  
  return (
    <div>
      {homes.map(home => {
        return (
          <Listing key={home.id} home={home} onHomeDelete={onHomeDelete} />
        )
      })}
    </div>
  )
}

export default ListingsContainer