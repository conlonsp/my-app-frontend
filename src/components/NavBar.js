import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <div>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/listings'>
        Listings
      </NavLink>
      <NavLink to='/agents'>
        Agents
      </NavLink>
    </div>
  )
}

export default NavBar