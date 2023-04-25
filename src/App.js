import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Legal from "./components/Legal";
import Updates from "./components/Updates";
import Support from "./components/Support";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="link" activeClassName="active">
          HOME
        </Link>
        <Link to="aboutus" className="link" activeClassName="active">
          ABOUT
        </Link>
        {/* 
        <Link to="legal" className="link" activeClassName="active">
          LEGAL
        </Link> */}
        <Link to="updates" className="link" activeClassName="active">
          UPDATES
        </Link>
        <Link to="support" className="link" activeClassName="active">
          SUPPORT
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="legal" element={<Legal />} />
        <Route path="updates" element={<Updates />} />
        <Route path="support" element={<Support />} />
      </Routes>
      <footer className="footer">
      <div className="iconContainer">
        <a
          href="https://www.facebook.com/KlubKweens1211/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://www.instagram.com/kweensklub/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
        <p>KK Group, LLC. All Rights Reserved.</p>
        <p>Powered by UGX</p>
      </footer>
    </div>
  );
}

export default App;
