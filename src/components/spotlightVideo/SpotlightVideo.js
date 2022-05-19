import React from "react";
import "./SpotlightVideo.scss";

const YoutubeEmbed = ({ embed }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embed}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  </div>
);

export default YoutubeEmbed;
