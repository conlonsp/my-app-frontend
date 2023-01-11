import React, { useEffect, useState } from 'react'

function HomePage() {
  const [lastHome, setLastHome] = useState({})

  useEffect(() => {
    fetch("http://localhost:9492/last-home")
    .then(r => r.json())
    .then(data => setLastHome(data))
  }, [])

  return (
    <div>
      <div>
        <h1>Welcome Homies!</h1>
        <p>
          This is the place to get all of your real estate needs accomplished!  Post your home for sale, schedule a showing, link up with real estate agents are all possible here!
        </p>
      </div>
      <div>
        <img src={lastHome.image_url}/>
        <p>{lastHome.address}</p>
        <p>${lastHome.price} | {lastHome.square_feet}sf</p>
      </div>
    </div>
  )
}

export default HomePage