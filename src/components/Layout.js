import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/styles.css";

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet title="La Fiambrera" />
    <div className="body_wrapper">
      <Navbar />
      <div>{children}</div>
    </div>
    <Footer />
  </main>
);

export default TemplateWrapper;
