import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { refactorName } from "../../util/string_utils";
import Abilities from "../abilities/Abilities";
import ChampskinList from "../skinList/ChampskinList";
import YoutubeEmbed from "../spotlightVideo/SpotlightVideo";

import "./ChampionDetail.scss";

function ChampionDetail() {
  let params = useParams();
  let champName = params.name;

  const [championData, setChampionData] = useState({});
  const [embed, setEmbed] = useState("");

  champName = refactorName(champName);

  let url = `https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion/${champName}.json`;
  let videoEndpoint = `https://league-backend-video.herokuapp.com/data`;

  useEffect(() => {
    fetch(videoEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setEmbed(data["champions"][champName].embed);
      });
  }, []);

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
          <div className="champDetail_video">
            <YoutubeEmbed embed={embed} />
          </div>

          <div className="champDetail_name">
            <div className="nickname">{championData.title.toUpperCase()}</div>
            <fieldset>
              <legend>
                <span className="firstname">{championData.name.toUpperCase()}</span>
              </legend>

              <div className="champDetail_info">
                <div className="role">
                  <span>Role</span>
                  <span>{championData.tags[0]}</span>
                </div>

                <div className="line"></div>

                <div className="lore">{championData.lore}</div>
              </div>
            </fieldset>
          </div>

          <Abilities
            abilityData={championData.spells}
            passiveData={championData.passive}
            championData={championData}
          />

          <div className="skins">
            <h3>Avaliable Skins</h3>
            <ChampskinList champName={champName} skins={championData.skins} />
          </div>
        </>
      )}
    </div>
  );
}

export default ChampionDetail;
