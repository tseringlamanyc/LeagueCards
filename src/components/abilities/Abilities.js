import React, { useEffect, useState } from "react";
import "./Ability.scss";

function Abilities({ abilityData, passiveData }) {
  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("championAbility__list");

  useEffect(() => {
    updateText();
  }, []);

  const updateText = (e) => {
    let index = e?.target?.id || 0;
    let title = abilityData[index].name;
    let desc = abilityData[index].description;
    setAbilityTitle(title);
    setAbilityDescription(desc);
  };

  const colorSelectedImg = () => {
    setSelectedStyle("championAbility_selected");
  };

  return (
    <div className="championAbility">
      <h2>Passive</h2>
      <div className="championAbility_passive">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/passive/${passiveData.image.full}`}
        />
        <div>
          <strong>{passiveData.name}</strong>
        </div>
        <div>{passiveData.description}</div>
      </div>

      <h2>Abilites</h2>

      <div className={selectedStyle} onClick={colorSelectedImg}>
        {abilityData.map((spell, index) => {
          return (
            <div key={index}>
              <div className="championAbility__detail" onClick={(e) => updateText(e)}>
                <img
                  id={index}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/${spell.image.full}`}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="championAbility_title">
        <div>
          <strong>{abilityTitle}</strong>
        </div>
        <div>{abilityDescription}</div>
      </div>
    </div>
  );
}

export default Abilities;
