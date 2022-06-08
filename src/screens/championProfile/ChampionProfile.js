import React from "react";
import ChampionDetail from "../../components/championDetail/ChampionDetail";
import Navbar from "../../components/navBar/Navbar";
import "./ChampionProfile.scss";

function ChampionProfile() {
  return (
    <div className="championProfile">
      <Navbar />
      <ChampionDetail />
    </div>
  );
}

export default ChampionProfile;
