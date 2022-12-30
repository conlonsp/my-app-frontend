import React from 'react'
import Listing from './Listing'

function ListingsContainer({ homes, setHomes, onHomeDelete }) {
  
  return (
    <div>
      {homes.map(home => {
        return (
          <Listing
            key={home.id}
            home={home}
            onHomeDelete={onHomeDelete}
            homes={homes}
            setHomes={setHomes}
          />
        )
      })}
    </div>
  )
}

export default ListingsContainer