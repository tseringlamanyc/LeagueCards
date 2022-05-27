import React from "react";
import ChampionCard from "../championCard/ChampionCard";
import "./ChampionList.scss";

function ChampionList({ champions }) {
  return (
    <>
      <div className="champList">
        {champions.map((champion) => {
          return <ChampionCard champion={champion} />;
        })}
      </div>
    </>
  );
}

export default ChampionList;
