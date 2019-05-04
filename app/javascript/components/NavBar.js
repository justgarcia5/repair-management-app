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
        {/* {current_user && */}
          <ul className="navi-items" id="nav-menu">
            <a href='/'><li className='navi-element'>Home</li></a>
            <a href='/about'><li className='navi-element'>About</li></a>
            <a href='/all_jobs'><li className='navi-element'>Jobs</li></a>
            <a href="/users/sign_out" rel="nofollow" data-method="delete"><li className="navi-element sign-out"><b>Sign Out</b></li></a>
          </ul>
        {/* }
        {!current_user &&
          <ul className="navi-items" id="nav-menu">
            <a href='/'><li className='navi-element'>Home</li></a>
            <a href='/about'><li className='navi-element'>About</li></a>
            <a href="/users/sign_in"><li className="navi-element">Sign In</li></a>
            <a href="/users/sign_up"><li className="navi-element login-register">Join</li></a>
          </ul>
        } */}
    </div>
  </div>
}

export default NavBar
