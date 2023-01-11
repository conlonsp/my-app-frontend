import React, { useEffect, useState } from 'react'

function HomePage({ agents }) {
  const [lastHome, setLastHome] = useState({})

  useEffect(() => {
    fetch("http://localhost:9492/last-home")
    .then(r => r.json())
    .then(data => setLastHome(data))
  }, [])

  
  return (
    <div>
      <div id='welcome-div'>
        <h1>Welcome Homies!</h1>
        <p>
          This is the place to get all of your real estate needs accomplished!  Post your home for sale, schedule a showing, link up with real estate agents.  These things are all possible here!
        </p>
      </div>
      <div id='new-listing-div'>
        <h1>Check out our newest listing!</h1>
        <img src={lastHome.image_url}/>
        <p>{lastHome.address}</p>
        <p>${lastHome.price} | {lastHome.square_feet}sf</p>
      </div>
      <div id='brokerage-div'>
        <h1>Meet the Brokerages!</h1>
        {agents.map(agent => {
          return (
            <li>{agent.brokerage}</li>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage