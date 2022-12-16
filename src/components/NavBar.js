import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {

  return (
    <div className='navbar'>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/find' exact>
        Find a Home
      </NavLink>
    </div>
  )
}

export default NavBar