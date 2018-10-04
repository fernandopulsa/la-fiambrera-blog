import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div className="body_wrapper">
    <Helmet title="La Fiambrera" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
