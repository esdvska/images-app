import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/SearchArea.css";

const SearchArea = () => {
  const appContext = useContext(AppContext);
  const { testArray } = appContext;
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

  const tagsDisplay = tagsPushDisplay.map((e) => <li key={e}>{e}</li>);
  return (
    <div className="search-list">
      <ul>{tagsDisplay.slice(0, 6)}</ul>
    </div>
  );
};
export default SearchArea;
