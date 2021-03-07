import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/SearchArea.css";

const SearchArea = () => {
  const appContext = useContext(AppContext);
  const {
    testArray,
    setInputSearchValue,
    setSearchChange,
    inputSearchValue,
  } = appContext;
  let tagsPushDisplay = [];
  let repeatArray = [];
  const tagsPush = [];
  const testArrayTags = testArray.map((t) => {
    return t.tags;
  });
  testArrayTags.forEach((e) => {
    e.forEach((x) => tagsPush.push(x.title));
  });

  for (let i = 0; i < tagsPush.length; i++) {
    if (tagsPushDisplay.includes(tagsPush[i])) {
      repeatArray.push(tagsPush[i]);
    } else {
      tagsPushDisplay.push(tagsPush[i]);
    }
  }
  const handleSearchTags = (e) => {
    setInputSearchValue(e);
    setSearchChange(true);
  };
  const tagsDisplay = tagsPushDisplay.slice(0, 6).map((e) => (
    <li
      key={e}
      onClick={() => {
        handleSearchTags(e);
      }}
    >
      {e}
    </li>
  ));
  return (
    <>
      {testArrayTags.length ? (
        <div className="search-list">
          <ul>{tagsDisplay}</ul>
        </div>
      ) : (
        <p>Results not found.</p>
      )}
    </>
  );
};
export default SearchArea;
