import React, { useState } from "react";
import ChampionList from "../../components/championList/ChampionList";

const url = "https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json";

function AllChampion() {
  const [allChamps, setAllChamps] = useState([]);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setAllChamps(Object.values(data.data));
    });

  return (
    <div>
      <ChampionList champions={allChamps} />
    </div>
  );
}

export default AllChampion;
