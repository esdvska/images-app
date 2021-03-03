import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/SearchArea.css";

const SearchArea = () => {
  const appContext = useContext(AppContext);
  const { testArray } = appContext;
  const testArrayDisplay = testArray.map((t) => (
    <li key={t.id}>{t.alt_description}</li>
  ));
  return (
    <div className="search-list">
      <ul>{testArrayDisplay}</ul>
    </div>
  );
};
export default SearchArea;
