import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ChampionDetail.scss";

function ChampionDetail() {
  let params = useParams();
  let champName = params.name;

  const [championData, setChampionData] = useState({});

  const refactorName = (name) => {
    let res = name;

    if (res.includes("'")) {
      res = res.charAt(0).toUpperCase() + res.slice(1).toLowerCase();
    }

    res = res.replace(/[^a-zA-Z]/g, "");

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
      case "RenataGlasc":
        res = "Renata";
        break;
      default:
        return res;
    }

    return res;
  };

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
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_1.jpg`}
            />
          </div>

          <div className="champDetail_name">
            <h4>{championData.title}</h4>
            <h2>{championData.name}</h2>
          </div>

          <div className="champDetail_lore">{championData.lore}</div>

          <div className="champDetail_abilities">
            <h3>Abilites</h3>
            {championData.spells.map((spell) => {
              return (
                <>
                  <div className="champDetail_abilitySet">
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/${spell.image.full}`}
                    />
                  </div>
                </>
              );
            })}
          </div>

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
