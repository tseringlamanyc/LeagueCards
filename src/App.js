import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllChampion from "./screens/allChampions/AllChampion";
import ChampionProfile from "./screens/championProfile/ChampionProfile";
import AboutMe from "./screens/aboutMe/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllChampion />} />
          <Route path="/:name" element={<ChampionProfile />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
