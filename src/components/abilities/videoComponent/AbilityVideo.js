import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return <video className="abilityVideo" src={abilityUrl} autoPlay type="video/mp4"></video>;
}

export default AbilityVideo;
