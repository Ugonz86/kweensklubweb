import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Legal from "./components/Legal";
import Updates from "./components/Updates";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="link" activeClassName="active" end>
          HOME
        </Link>

        <Link to="aboutus" className="link" activeClassName="active">
          ABOUT
        </Link>

        <Link to="legal" className="link" activeClassName="active">
          LEGAL
        </Link>

        <Link to="updates" className="link" activeClassName="active">
          UPDATES
        </Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="legal" element={<Legal />} />
        <Route path="updates" element={<Updates />} />
      </Routes>
    </div>
  );
}

export default App;
