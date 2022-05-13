import React from "react";
import { Link } from "react-router-dom";
import { refactorName } from "../../util/string_utils";
import "./ChampionCard.scss";

function ChampionCard({ champion }) {
  return (
    <div className="championCard">
      <Link to={`/${champion.name}`}>
        <div className="championCard_pic">
          <img
            className="first-pic"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${refactorName(
              champion.name
            )}_0.jpg`}
          />
          <img
            className="hover-pic"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${refactorName(
              champion.name
            )}_1.jpg`}
          />
        </div>
        <div className="championCard_name">
          <span>{refactorName(champion.name)}</span>
        </div>
      </Link>
    </div>
  );
}

export default ChampionCard;
