import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return <video className="abilityVideo" src={abilityUrl} loop muted controls playsinline></video>;
}

export default AbilityVideo;
