import React from 'react'

const NavBar = () => {
  return <div className='navi-span'>
    <div className="navi-container">
      <div className="logo-container">
        <a href='/'>
          <div className='logo'>
            <p className="logo-text">Repair Management App</p>
          </div>
        </a>
      </div>
      <ul className="navi-items" id="nav-menu">
        <a href='/' className='navi-element'><li>Home</li></a>
        <a href='/about' className='navi-element'><li>About</li></a>
      </ul>
    </div>
  </div>
}

export default NavBar
