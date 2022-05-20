import React, { useState, useEffect } from "react";
import ChampionList from "../../components/championList/ChampionList";
import Navbar from "../../components/navBar/Navbar";
import EmptyList from "../../components/views/EmptyList";
import LoadingView from "../../components/views/LoadingView";
import { refactorName } from "../../util/string_utils";

const url = "https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json";

function AllChampion() {
  const [loading, setLoading] = useState(true);
  const [allChamps, setAllChamps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChamps, setFilteredChamps] = useState([]);

  const fetChamps = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllChamps(Object.values(data.data));
        setLoading(false);
      });
  };

  useEffect(() => {
    fetChamps();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      let filteredChampsList = [...allChamps];

      filteredChampsList = filteredChampsList.filter((champ) => {
        return refactorName(champ.name).toLowerCase().includes(searchTerm.toLowerCase());
      });

      setFilteredChamps(filteredChampsList);
    } else {
      setFilteredChamps([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <LoadingView />}

      {!loading && searchTerm.length > 0 && filteredChamps.length > 0 && (
        <ChampionList champions={filteredChamps} />
      )}

      {!loading && searchTerm.length > 0 && filteredChamps.length === 0 && (
        <EmptyList searchTerm={searchTerm} />
      )}

      {allChamps.length > 0 && !searchTerm && <ChampionList champions={allChamps} />}
    </div>
  );
}

export default AllChampion;
