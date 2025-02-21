import React from 'react'
import { Link } from 'react-router-dom';
import logo_2 from '../assets/logo__2.png'

const Nav = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center p-3"><a href="#"><img src={logo_2} alt="logo" /></a></div>

        <div className="col-12 text-uppercase fw-bold "><nav class="navbar navbar-expand-lg bg-body-tertiary text-center">
  <div class="container-fluid justify-content-center">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria- 
     controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto"> 
        <li class="nav-item">
          <Link class="nav-link pe-5" to={"/Home"}>Home</Link>
        </li>
        <li class="nav-item">
          {/* <Link></Link> */}
          <Link class="nav-link  pe-5" to={"/Product"}>Product</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link  pe-5"  to={"/About"}>About</Link>
          {/* <a class="nav-link"  to={"/About"}>About</a> */}
        </li>
        <li class="nav-item">
          <Link class="nav-link  pe-5" to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
   

    </>
  )
}

export default Nav
