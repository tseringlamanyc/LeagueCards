import React from "react";
import ChampionCard from "../championCard/ChampionCard";
import "./ChampionList.scss";

function ChampionList({ champions }) {
  return (
    <div className="champList" key={Math.random()}>
      {champions.map((champion) => {
        return <ChampionCard champion={champion} />;
      })}
    </div>
  );
}

export default ChampionList;
