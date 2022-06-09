import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./ChampskinList.scss";

function ChampskinList({ champName, skins }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = skins.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === len - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? len - 1 : currentIndex - 1);
  };

  return (
    <>
      <div className="champSkinList">
        {skins.map((skin, index) => {
          return (
            <div className={index === currentIndex ? "active" : "not-active"} key={index}>
              {index === currentIndex && (
                <div>
                  <img
                    src={`${`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}`}
                    loading="lazy"
                  />
                  <div className="skin-name">{skin.name === "default" ? champName : skin.name}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="arrows">
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={prevSlide}>
          Prev
        </Button>
        <Button variant="outlined" startIcon={<ArrowForwardIcon />} onClick={nextSlide}>
          Next
        </Button>
      </div>
    </>
  );
}

export default ChampskinList;
