import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return (
    <video
      className="abilityVideo"
      src={abilityUrl}
      autoPlay
      controls
      loop
      muted
      playsInline></video>
  );
}

export default AbilityVideo;
