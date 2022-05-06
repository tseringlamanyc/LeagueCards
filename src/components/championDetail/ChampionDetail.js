import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChampionCard from "../championCard/ChampionCard";

function ChampionDetail() {
  let params = useParams();
  let champName = params.name;

  const [championData, setChampionData] = useState({});

  useEffect(() => {
    // http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/Aatrox.json

    let url = `https://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/${champName}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChampionData(data.data[champName]);
      });
  }, []);

  console.log(championData.lore);

  return (
    <div>{Object.keys(championData).length > 0 && <ChampionCard champion={championData} />}</div>
  );
}

export default ChampionDetail;
