import React, { useEffect, useState } from "react";
import BasicModal from "../modal/Modal";
import AbilityVideo from "./videoComponent/AbilityVideo";
import { convertChampKey } from "../../util/convertKey";
import { patchVersion } from "../../util/patch_version";
import "./Ability.scss";

function Abilities({ abilityData, passiveData, championData }) {
  const [abilityTitle, setAbilityTitle] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [abilityIndex, setAbilityIndex] = useState(0);

  const keystroke = ["Q", "W", "E", "R"];
  const [abilityKey, setAbilityKey] = useState(keystroke[0]);

  const [abilityUrl, setAbilityUrl] = useState("");

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

    let convertedKey = convertChampKey(championData.key);
    setAbilityUrl(
      `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${convertedKey}/ability_${convertedKey}_${aKey}1.mp4`
    );
  };

  return (
    <div className="championAbility">
      <h2>Passive</h2>
      <div className="championAbility_passive">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/passive/${passiveData.image.full}`}
          alt="PassivePic"
        />
        <div className="championAbility_passiveName">
          <strong>{passiveData.name}</strong>
        </div>
        <div dangerouslySetInnerHTML={{ __html: passiveData.description }} />
      </div>

      <h2>Abilites</h2>

      <div className="championAbility_fullSection">
        <div className="championAbility_textSection" key={Math.random()}>
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
                    src={`http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/spell/${spell.image.full}`}
                    alt="AlbilityPic"
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

        <div className="championAbility_videoSection">
          <div className="championAbility_video">
            <AbilityVideo abilityUrl={abilityUrl} />
          </div>
        </div>
      </div>

      <div className="champDetail_tips">
        {championData.allytips.length > 0 && championData.enemytips.length > 0 && (
          <BasicModal allytips={championData.allytips} enemytips={championData.enemytips} />
        )}
      </div>
    </div>
  );
}

export default Abilities;
