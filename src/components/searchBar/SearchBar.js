import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";

function SearchBar({ searchTerm, setSearchTerm, setChampRole }) {
  const allRoles = ["All", "Assassin", "Fighter", "Mage", "Marksman", "Support"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    updateRole();
  }, []);

  const updateRole = (e) => {
    let role = e?.target?.id || roleIndex;
    setChampRole(allRoles[role]);
    setRoleIndex(Number(role));
  };

  return (
    <div className="bar">
      <div className="bar_search">
        <SearchIcon className="icon" />
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}></input>
      </div>

      <div className="bar_roles">
        {allRoles.map((role, index) => {
          return (
            <div
              key={index}
              className={roleIndex === index ? "role-selected" : "role"}
              onClick={(e) => updateRole(e)}>
              <div id={index}>{role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
