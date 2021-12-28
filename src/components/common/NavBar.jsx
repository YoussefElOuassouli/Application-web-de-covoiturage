import React, {useState} from 'react'
import userpng from '../../assets/user.png'
import settingspng from '../../assets/settings.png'
import logOutpng from '../../assets/logout.png'

import "./common.css"
export default function NavBar({onRegOrLogClick}) {

  const [connected,setConnection] = useState(false);


    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PFA | LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">List Des Voyages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <div onChange={(e)=> {e.preventDefault()}} className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          connected === true
          ?
          (
            <li className="nav-item dropdown">
            <a className="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={userpng} alt="yes"/>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#"><img className='margin-left' height={"20px"} src={userpng} alt="yes"/>Profile</a></li>
              <li><a className="dropdown-item" href="#"><img className='margin-left' height={"20px"} src={settingspng} alt="yes"/>Settings</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#"><img className='margin-left' height={"15px"} src={logOutpng} alt="yes"/>Logout</a></li>
            </ul>
          </li>
          )
          :
          (
            <>
            <li className="nav-item">
              <button className="nav-link" onClick={() => 
                onRegOrLogClick("Login")
              }>LOGIN</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => 
                onRegOrLogClick("Register")
              } >REGISTER</button>
            </li>
            </>
          )
        }

        </ul>
      </div>
    </div>
  </div>
</nav>
    )
}
