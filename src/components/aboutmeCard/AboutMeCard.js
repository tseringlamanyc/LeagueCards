import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./AboutMeCard.scss";
import AboutMeInfo from "../aboutmeInfo/AboutMeInfo";

function AboutMeCard() {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src="./my-avatar.png" alt="about image" />
              </div>
            </div>

            <h2>Tsering Lama</h2>
            <h3>Full Stack Web developer</h3>
          </div>

          <ul className="icons">
            <li>
              <GitHubIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </div>

      <AboutMeInfo className="Info" />
    </div>
  );
}

export default AboutMeCard;
