import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { refactorName } from "../../util/string_utils";
import Abilities from "../abilities/Abilities";
import SwipeableTextMobileStepper from "../skinList/SkinList";
import YoutubeEmbed from "../spotlightVideo/SpotlightVideo";

import "./ChampionDetail.scss";

function ChampionDetail() {
  let params = useParams();
  let champName = params.name;

  const [championData, setChampionData] = useState({});
  const [embed, setEmbed] = useState("");

  champName = refactorName(champName);

  let url = `https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/${champName}.json`;
  let videoEndpoint = `https://league-backend-video.herokuapp.com/data`;

  useEffect(() => {
    fetch(videoEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setEmbed(data["champions"][champName].embed);
      });
  });

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
        <div>
          <div className="champDetail_video">
            <YoutubeEmbed embed={embed} />
          </div>

          <div className="champDetail_name">
            <h4>{championData.title}</h4>
            <h2>{championData.name}</h2>
          </div>

          <div className="champDetail_lore">{championData.lore}</div>

          <Abilities abilityData={championData.spells} passiveData={championData.passive} />

          <h3>Skins</h3>

          <div className="champDetail_skins">
            <SwipeableTextMobileStepper champName={champName} skins={championData.skins} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChampionDetail;
