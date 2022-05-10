import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { refactorName } from "../../util/string_utils";
import Abilities from "../abilities/Abilities";

import "./ChampionDetail.scss";

function ChampionDetail() {
  let params = useParams();
  let champName = params.name;

  const [championData, setChampionData] = useState({});

  champName = refactorName(champName);

  let url = `https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/${champName}.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChampionData(data.data[champName]);
      });
  }, []);

  return (
    <div className="champDetail">
      {Object.keys(championData).length > 0 && (
        <>
          <div className="champDetail_image">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
            />
          </div>

          <div className="champDetail_name">
            <h4>{championData.title}</h4>
            <h2>{championData.name}</h2>
          </div>

          <div className="champDetail_lore">{championData.lore}</div>

          <Abilities abilityData={championData.spells} />

          <div className="champDetail_skins">
            <h3>Skins</h3>
            {championData.skins.map((skin) => {
              return (
                <>
                  <div>{skin.name}</div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ChampionDetail;
