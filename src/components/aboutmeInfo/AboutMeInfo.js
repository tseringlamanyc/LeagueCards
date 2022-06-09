import React from "react";
import "./AboutMeInfo.scss";

function AboutMeInfo() {
  return (
    <div className="about-right">
      <h1>
        Hello<span>!</span>
      </h1>
      <h2>Here's who I am & what I do</h2>
      <div className="about-btns">
        <button type="button" className="btn btn-pink">
          resume / CV
        </button>
        <button type="button" className="btn btn-white">
          Git hub
        </button>
      </div>

      <div className="about-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam
          quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi
          modi dolor nam numquam? Temporibus, molestias amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias
          laudantium sapiente impedit!
        </p>
      </div>
      <div className="credit">
        Made with <span>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a>
      </div>
    </div>
  );
}

export default AboutMeInfo;
