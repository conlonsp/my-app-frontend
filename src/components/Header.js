import React from 'react'
import NavBar from './NavBar'

function Header() {

  return (
    <div className='App-header'>
      <div id='title'>
        <h3>Homies</h3>
      </div>
      <div id='subtitle'>
        <h4>A Brokerage Platform</h4>
      </div>
      <NavBar />
    </div>
  )
}

export default Header


