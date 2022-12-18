import React from 'react'
import Listing from './Listing'

function ListingsContainer({homes}) {

  return (
    <div>
      {homes.map(home => {
        <Listing 
          id={home.id}
          address={home.address}
        />
      })}
    </div>
  )
}

export default ListingsContainer