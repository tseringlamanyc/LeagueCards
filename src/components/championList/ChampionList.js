import React from "react";
import ChampionCard from "../championCard/ChampionCard";
import "./ChampionList.scss";

function ChampionList({ champions }) {
  return (
    <div>
      <div className="champList">
        {champions.map((champion) => {
          return <ChampionCard champion={champion} key={champion.key} />;
        })}
      </div>
    </div>
  );
}

export default ChampionList;
