import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    alignContent: 'center',
    width: "75px",
    textAlign: 'center',
    padding: "3px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "darkslategray",
  };

  return (
    <div style={{padding: '25px'}}>
      <NavLink 
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkslategray',
          color: 'white',
        }}
      >
        Home
      </NavLink>
      <NavLink
        to='/listings'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkslategray',
          color: 'white',
        }}
      >
        Listings
      </NavLink>
      <NavLink
        to='/agents'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'darkslategray',
          color: 'white',
        }}
      >
        Agents
      </NavLink>
    </div>
  )
}

export default NavBar