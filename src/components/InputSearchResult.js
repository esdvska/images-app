import React, { useContext } from "react";

import AppContext from "../context/AppContext";

const InputSearchResult = () => {
  const appContext = useContext(AppContext);
  const { inputSearchValue, searchPhrase, handleEnter } = appContext;
  return (
    <div className="div-input-search">
      &#xf002;
      <input
        type="text"
        placeholder="Search free high-resolution photos"
        value={inputSearchValue}
        onChange={searchPhrase}
        onKeyDown={handleEnter}
      ></input>
      <p>&#xf00d;</p>
    </div>
  );
};

export default InputSearchResult;
