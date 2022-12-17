import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "darkslategray",
  textDecoration: "none",
  fontSize: '20px',
  color: "white",
};


function NavBar() {

  return (
    <div className='navbar' style={{textAlign: 'center'}}>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle= {{
          background: 'slategray',
        }}
      >
        Home
      </NavLink>
      <NavLink
        to='/find'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        Find
      </NavLink>
      <NavLink
        to='/list'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        List
      </NavLink>
    </div>
  )
}

export default NavBar