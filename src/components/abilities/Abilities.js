import React, { useEffect, useState } from "react";
import "./Ability.scss";

function Abilities({ abilityData, passiveData }) {
  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");

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

  console.log(passiveData.name);

  return (
    <div className="championAbility">
      <h2>Passive</h2>
      <div className="championAbility_passive">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/passive/${passiveData.image.full}`}
        />
        <div>{passiveData.name}</div>
        <div>{passiveData.description}</div>
      </div>

      <h2>Abilites</h2>

      <div className="championAbility__list">
        {abilityData.map((spell, index) => {
          return (
            <>
              <div className="championAbility__detail" onClick={(e) => updateText(e)}>
                <img
                  id={index}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/${spell.image.full}`}
                />
              </div>
            </>
          );
        })}
      </div>
      <div>{abilityTitle}</div>
      <div>{abilityDescription}</div>
    </div>
  );
}

export default Abilities;
