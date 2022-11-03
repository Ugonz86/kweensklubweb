import React from "react";
import kklogo2 from "../kklogo2.png";
import "../App.css";

function AboutUs() {
  return (
    <div className="about">
      <img src={kklogo2} className="App-logo2" alt="logo" />
      <div className="content">
        <p>
          Kweens Klub (KK), located in the heart of Santurce in San Juan, Puerto
          Rico, is the premier LGBTIQ+ nightclub of the island. It all started
          as an idea of combining nightlight experiences from the south and the
          metropolitan area of Puerto Rico. The building was an abandoned
          structure rebuilded since March 2020 for the purpose of the current
          nightclub. The idea of the setting was progressive because many plans
          changed in the development. However, it turned out the best version
          out of the planning.
        </p>
        <p>
          We offer a variety of local beers and quality cocktails. Our main
          attraction are the drag shows where we bring international celebrity
          guests performers to our stage. The second floor allocates one of the
          biggest attributes to the local drag icons with all their pictures.
          Also, we provide an open outdoor space. KK was opened in December
          2021, and have become popular because of the quality of the spectacles
          and the huge dance floor.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
