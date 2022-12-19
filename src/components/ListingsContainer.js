import React from 'react'
import Listing from './Listing'

function ListingsContainer({ homes }) {
  console.log(homes)
  
  return (
    <div>
      {homes.map(home => {
        return (
          <Listing key={home.id} home={home}/>
        )
      })}
    </div>
  )
}

export default ListingsContainer