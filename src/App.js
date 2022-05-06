import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AllChampion from "./screens/allChampions/AllChampion";
import ChampionProfile from "./screens/championProfile/ChampionProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllChampion />} />
          <Route path="/:name" element={<ChampionProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
