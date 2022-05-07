import React from "react";
import { Link } from "react-router-dom";
import "./ChampionCard.scss";

function ChampionCard({ champion }) {
  const refactorName = (name) => {
    let res = name;

    if (res.includes("'")) {
      res = res.charAt(0).toUpperCase() + res.slice(1).toLowerCase();
    }

    res = res.replace(/[^a-zA-Z]/g, "");

    console.log(`This is ${res}`);

    switch (res) {
      case "Wukong":
        res = "MonkeyKing";
        break;
      case "Kogmaw":
        res = "KogMaw";
        break;
      case "LeBlanc":
        res = "Leblanc";
        break;
      case "NunuWillump":
        res = "Nunu";
        break;
      case "Reksai":
        res = "RekSai";
        break;
      default:
        return res;
    }

    return res;
  };

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
