import React from 'react'
import Listing from './Listing'
import ListingPostForm from './ListingPostForm'
import { Card } from 'semantic-ui-react'

function ListingsContainer({ homes, setHomes, agents, appointments, setAppointments }) {
  
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
      <div id='listing-form-div'>
        <ListingPostForm homes={homes} setHomes={setHomes} />
      </div>
      <br/>
      <Card.Group itemsPerRow={5} >
      {homes.map(home => {
        return (
            <Listing
              key={home.id}
              home={home}
              onHomeDelete={handleHomeDelete}
              setHomes={setHomes}
              onUpdateHome={handleUpdateHome}
              appointments={appointments}
              setAppointments={setAppointments}
              agents={agents}
            />
        )
      })}
      </Card.Group>
    </div>
  )
}

export default ListingsContainer