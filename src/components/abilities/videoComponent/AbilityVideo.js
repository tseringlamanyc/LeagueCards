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
      playsinline
      type="video.webm"></video>
  );
}

export default AbilityVideo;
