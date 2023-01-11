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
        <h1>Welcome!</h1>
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