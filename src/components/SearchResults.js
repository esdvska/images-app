import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const appContext = useContext(AppContext);
  const { testArray, inputSearchValue } = appContext;
  const displaySearch = testArray.map((search) => (
    <div key={search.id}>
      <img src={search.urls.small}></img>
    </div>
  ));
  return (
    <div>
      <h1>{inputSearchValue}</h1>
      <div className="image-container">{displaySearch}</div>
    </div>
  );
};
export default SearchResults;
