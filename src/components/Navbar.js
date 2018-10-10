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
      <div className="RRSS_wrapper">
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://www.spreaker.com/show/3170279/episodes/feed">RSS Feed</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://open.spotify.com/show/3NPtLDGBNOdrZsrSbreyI2?si=PPBUtmCfTQW3KIJfeSUxTg">Spotify</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://itunes.apple.com/es/podcast/la-fiambrera/id1437938605?mt=2">iTunes</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://www.ivoox.com/podcast-fiambrera_sq_f1621292_1.html">iVoox</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://pca.st/rd5q">Pocket Casts</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://overcast.fm/itunes1437938605/la-fiambrera">Overcast</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://twitter.com/fiambreraxyz">Twitter</a>
        </p>
        <p className="RRSS_item color_corpo">
          <a target="blank" href="https://www.instagram.com/fiambreraxyz/">Instagram</a>
        </p>
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
