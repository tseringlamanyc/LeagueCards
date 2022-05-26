import React, { useEffect, useState } from "react";
import "./Ability.scss";

function Abilities({ abilityData, passiveData }) {
  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [abilityIndex, setAbilityIndex] = useState(0);

  const keystroke = ["Q", "W", "E", "R"];
  const [abilityKey, setAbilityKey] = useState(keystroke[0]);

  useEffect(() => {
    updateText();
  }, []);

  const updateText = (e) => {
    let index = e?.target?.id || 0;
    let title = abilityData[index].name;
    let desc = abilityData[index].description;
    let aKey = keystroke[index];
    setAbilityTitle(title);
    setAbilityDescription(desc);
    setAbilityIndex(Number(index));
    setAbilityKey(aKey);
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
        <div dangerouslySetInnerHTML={{ __html: passiveData.description }} />
      </div>

      <h2>Abilites</h2>

      <div className="championAbility__list">
        {abilityData.map((spell, index) => {
          return (
            <div
              key={index}
              className={
                abilityIndex === index
                  ? "championAbility__listItem championAbility__listItem-selected"
                  : "championAbility__listItem"
              }
              onClick={(e) => updateText(e)}>
              <img
                id={index}
                src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/${spell.image.full}`}
              />
            </div>
          );
        })}
      </div>
      <div className="championAbility_title">
        <div>
          <span>{abilityKey}</span>
          <span>
            <strong>{abilityTitle}</strong>
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: abilityDescription }} />
      </div>
    </div>
  );
}

export default Abilities;
