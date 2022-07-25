import React from "react";
import SearchBoxIcon from "../images/icons8-search.svg";

export default function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-box__container">
      <input
        className="search-box__input"
        type="text"
        name="search"
        id="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <img
        src={SearchBoxIcon}
        className="search-box__icon"
        alt="search box icon"
      ></img>
    </div>
  );
}
