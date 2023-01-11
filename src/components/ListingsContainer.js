import React from 'react'
import Listing from './Listing'
import ListingPostForm from './ListingPostForm'

function ListingsContainer({ homes, setHomes, appointments, setAppointments, agents }) {
  
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
    <div className='item3'>
      <h2>Check Out Our Current Listings</h2>
      <div id='listing-form-div'>
        <ListingPostForm homes={homes} setHomes={setHomes} />
      </div>
      {homes.map(home => {
        return (
          <Listing
            key={home.id}
            home={home}
            onHomeDelete={handleHomeDelete}
            homes={homes}
            setHomes={setHomes}
            onUpdateHome={handleUpdateHome}
            appointments={appointments}
            setAppointments={setAppointments}
            agents={agents}
          />
        )
      })}
      
    </div>
  )
}

export default ListingsContainer