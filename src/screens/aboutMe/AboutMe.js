import React from "react";
import AboutMeCard from "../../components/aboutmeCard/AboutMeCard";
import Navbar from "../../components/navBar/Navbar";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="aboutme">
        <AboutMeCard />
      </div>
    </>
  );
}

export default AboutMe;
