import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src="./my-avatar.png" />
      </div>

      <div className={isExpanded ? "navbar_items navbar_items-expanded" : "navbar_items"}>
        <ul>
          <li>
            <a href="/">Champions</a>
          </li>

          <li>
            <a href="/">Team</a>
          </li>

          <li>
            <a href="/about">About Me</a>
          </li>
        </ul>
      </div>

      <div
        className="navbar_hamburger"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Navbar;
