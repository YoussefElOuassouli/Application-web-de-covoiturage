import React, {useState} from 'react'
import userpng from '../../assets/user.png'
import settingspng from '../../assets/settings.png'
import logOutpng from '../../assets/logout.png'

import "./common.css"
export default function NavBar() {

  const [connected,setConnection] = useState(false);


    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">PFA | LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">List Des Voyages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {
          connected === true
          ?
          (
            <li class="nav-item dropdown">
            <a class="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={userpng} alt="yes"/>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#"><img className='margin-left' height={"20px"} src={userpng} alt="yes"/>Profile</a></li>
              <li><a class="dropdown-item" href="#"><img className='margin-left' height={"20px"} src={settingspng} alt="yes"/>Settings</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#"><img className='margin-left' height={"15px"} src={logOutpng} alt="yes"/>Logout</a></li>
            </ul>
          </li>
          )
          :
          (
            <>
            <li class="nav-item">
              <a class="nav-link" onclick="() => {
                setConnection(true);
              }" href="/">LOGIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">REGISTER</a>
            </li>
            </>
          )
        }

        </ul>
      </form>
    </div>
  </div>
</nav>
    )
}
