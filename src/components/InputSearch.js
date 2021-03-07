import React, { useContext } from "react";

import AppContext from "../context/AppContext";
const InputSearch = () => {
  const appContext = useContext(AppContext);
  const { testArray, inputSearchValue, searchPhrase, handleEnter } = appContext;
  return (
    <div className="div-input">
      &#xf002;
      <input
        type="text"
        placeholder="Search free high-resolution photos"
        value={inputSearchValue}
        onChange={searchPhrase}
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
};

export default InputSearch;
