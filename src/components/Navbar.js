import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="">
    <div className="">
      <div className="">
        <Link to="/" className="title">
        La Fiambrera  
         {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure> */}
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
    </div>
  </nav>
)

export default Navbar
