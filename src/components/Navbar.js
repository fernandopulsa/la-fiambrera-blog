import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/fiambrera-logo.png'
import caratula from '../img/caratula.png'

const Navbar = () => (
  <nav>
      <div className="logo_wrapper">
        {/* <Link to="/" className="title">
            <img src={logo} alt="logo" className="logo-img" />
        </Link> */}
        <Link to="/" className="title">
            <img src={caratula} alt="logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-start">
        {/* <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link> */}
      </div>
  </nav>
)

export default Navbar
