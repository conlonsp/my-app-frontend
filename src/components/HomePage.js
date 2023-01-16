import React, { useEffect, useState } from 'react'

function HomePage({ agents }) {
  const [lastHome, setLastHome] = useState({})

  useEffect(() => {
    fetch("http://localhost:9492/last-home")
    .then(r => r.json())
    .then(data => setLastHome(data))
  }, [])

  // const address = lastHome.address
  // const addressArr = address.split(',')
  // const street = addressArr[0]
  // const city = addressArr[1]
  // const state = addressArr[2]

  
  return (
    <div id='home'>
      <div id='welcome-div'>
        <h1 style={{fontSize: '35px'}}>Welcome Homie's!</h1>
        <p style={{fontSize: '17px'}}>
          <em>This is the place to get all of your real estate needs accomplished!  Post your home for sale, schedule a showing, or link up with a real estate agent!</em>
        </p>
      </div>
      <div id='listing-brokerage-div'>
        <span id='new-listing-div'>
          <h1 style={{textDecoration: 'underline'}}>Check out our newest listing!</h1>
          <img id='new-listing-img' src={lastHome.image_url} alt='last posted home' />
          <p style={{fontSize: '17px'}}>{lastHome.address}</p>
          {/* <p style={{fontSize: '17px'}}>{street},</p>
          <p style={{fontSize: '17px'}}>{city}, {state}</p> */}
          <p style={{fontSize: '17px'}}>${lastHome.price} | {lastHome.square_feet}sf</p>
        </span>
        <span id='brokerage-div'>
          <h1 style={{textDecoration: 'underline'}}>Meet the Brokerages!</h1>
          {agents.map(agent => {
            return (
              <p key={agent.id}>{agent.brokerage}</p>
            )
          })}
        </span>
      </div>
      <div id='history-div'>
        <h1 id='history-title' style={{textShadow: '6px 6px 6px #249629'}}>| Our History |</h1>
        <p id='history-desc'>Homie's was created by <em>Sam Conlon</em>, a student at the Flatiron School.  It started out as a web development project to showcase his knowledge of the React framework and the Ruby language.  During development, Sam came across a few articles on Zillow's ability to greatly sway the housing market after purchasing tons of real estate in different regions all across the country.  Disgusted by their greed, he became inspired to create a not-for-profit alternative to Zillow's real estate empire. From this moment was Homie's born.</p>
        <p style={{fontSize: '150px'}}>. . .</p>
      </div>
    </div>
  )
}

export default HomePage