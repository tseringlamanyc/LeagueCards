import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return (
    <video
      className="abilityVideo"
      src={abilityUrl}
      autoplay
      loop
      muted
      controls
      webkit-playsinline
      playsinline></video>
  );
}

export default AbilityVideo;
