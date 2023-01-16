import React from 'react'
import NavBar from './NavBar'

function Header() {

  return (
    <div className='App-header'>
      <div id='title'>
        <h3 style={{fontSize: '150px', fontStyle: 'oblique', textShadow: '6px 6px 6px #1C6EA4'}}>Homie's</h3>
      </div>
      <div id='subtitle'>
        <h4 style={{marginBottom: '13px'}}>Find your dream home today!</h4>
      </div>
      <NavBar />
    </div>
  )
}

export default Header


