import React from "react";
import "./AbilityVideo.scss";

function AbilityVideo({ abilityUrl }) {
  return (
    <video
      className="abilityVideo"
      key={Math.random()}
      src={abilityUrl}
      autoPlay
      controls
      playsInline
      onerror="alert('Could\'nt load video')"
      type="video/webm"></video>
  );
}

export default AbilityVideo;
