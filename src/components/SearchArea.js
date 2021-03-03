import React from "react";
import "../styles/SearchArea.css";

const SearchArea = ({ test }) => {
  const testArrayDisplay = test.map((t) => (
    <li key={t.id}>{t.alt_description}</li>
  ));
  return (
    <div className="search-list">
      <ul>{testArrayDisplay}</ul>
    </div>
  );
};
export default SearchArea;
