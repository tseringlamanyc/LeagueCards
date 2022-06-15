import React, { useState, useEffect } from "react";
import ChampionList from "../../components/championList/ChampionList";
import Navbar from "../../components/navBar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import EmptyList from "../../components/views/EmptyList";
import LoadingView from "../../components/views/LoadingView";
import { refactorName } from "../../util/string_utils";

import "./AllChampion.scss";

const url = "https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";

function AllChampion() {
  const [loading, setLoading] = useState(true);
  const [allChamps, setAllChamps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [champRole, setChampRole] = useState("All");

  const fetchChamps = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllChamps(Object.values(data.data));
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchChamps();
  }, []);

  let allChampsCopy = [...allChamps];

  let searchedChamps = searchTerm.length
    ? allChampsCopy.filter((champ) => {
        return refactorName(champ.name).toLowerCase().includes(searchTerm.toLowerCase());
      })
    : allChampsCopy;

  let taggedChamps =
    champRole === "All"
      ? searchedChamps
      : searchedChamps.filter((champ) => {
          return champ.tags[0] === champRole;
        });

  return (
    <div className="allChampion">
      <Navbar />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setChampRole={setChampRole}
      />

      {loading && <LoadingView />}

      {!loading && taggedChamps.length === 0 && <EmptyList searchTerm={searchTerm} />}

      {taggedChamps.length > 0 && <ChampionList champions={taggedChamps} />}
    </div>
  );
}

export default AllChampion;
