import React from "react";
import kklogo2 from "../kklogo2.png";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={kklogo2} className="App-logo" alt="logo" />
        <p>
          For app support, please contact our Developer at
          kkappdevtester@gmail.com
        </p>
      </div>
      {/* <footer className="footer">App and Website Developed by UGX</footer> */}
    </div>
  );
}

export default Home;
