import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return (
    <video className="abilityVideo" src={abilityUrl} autoPlay playsInline type="video/mp4"></video>
  );
}

export default AbilityVideo;
