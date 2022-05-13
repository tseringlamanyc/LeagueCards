import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { refactorName } from "../../util/string_utils";
import Abilities from "../abilities/Abilities";
import SkinList from "../skinList/SkinList";
import YoutubeEmbed from "../spotlightVideo/SpotlightVideo";

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
            <YoutubeEmbed />
          </div>

          <div className="champDetail_name">
            <h4>{championData.title}</h4>
            <h2>{championData.name}</h2>
          </div>

          <div className="champDetail_lore">{championData.lore}</div>

          <Abilities abilityData={championData.spells} passiveData={championData.passive} />

          <h3>Skins</h3>

          <div className="champDetail_skins">
            <SkinList champName={champName} skins={championData.skins} />
          </div>
        </>
      )}
    </div>
  );
}

export default ChampionDetail;
