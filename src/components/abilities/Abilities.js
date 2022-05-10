import React, { useEffect, useState } from "react";
import "./Ability.scss";

function Abilities({ abilityData }) {
  const [abilityText, setAbilityText] = useState("");

  useEffect(() => {
    updateText();
  }, []);

  const updateText = (e) => {
    let index = e?.target?.id || 0;
    let text = abilityData[index].description;
    setAbilityText(text);
  };

  return (
    <div className="championAbility">
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
      <div>{abilityText}</div>
    </div>
  );
}

export default Abilities;
