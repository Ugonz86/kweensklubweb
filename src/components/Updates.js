import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../App.css";

function Updates() {
  return (
    <div className="updates">
      <h3>We'll Announce Exciting Updates Soon.</h3>
      <h3>Stay Tuned.</h3>
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
    </div>
  );
}

export default Updates;
