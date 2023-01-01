import React from 'react'
import Listing from './Listing'

function ListingsContainer({ homes, setHomes, appointments }) {
  
  function handleUpdateHome(updatedHomeObj) {
    const updatedHomes = homes.map(home => {
      if(home.id === updatedHomeObj.id) {
        return updatedHomeObj
      } else {
        return home
      }
    })
    setHomes(updatedHomes)
  }

  function handleHomeDelete(id) {
    const updatedHomes = homes.filter(home => home.id !== id)
    setHomes(updatedHomes)
  }

  return (
    <div>
      {homes.map(home => {
        return (
          <Listing
            key={home.id}
            home={home}
            onHomeDelete={handleHomeDelete}
            homes={homes}
            setHomes={setHomes}
            onUpdateHome={handleUpdateHome}
          />
        )
      })}
    </div>
  )
}

export default ListingsContainer