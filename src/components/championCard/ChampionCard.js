import React from "react";
import { Link } from "react-router-dom";
import "./ChampionCard.scss";

function ChampionCard({ champion }) {
  let championName = champion?.name?.replace(/[^a-zA-Z]/g, "");
  const name = championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase();

  return (
    <div className="championCard">
      <Link to={`/${champion.name}`}>
        <img
          className="championCard_image"
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
          alt={`${name}`}
        />
      </Link>
    </div>
  );
}

export default ChampionCard;
