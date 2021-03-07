import React, { useContext } from "react";

import AppContext from "../context/AppContext";
import ImageGallery from "./ImageGallery";
import InputSearchResult from "./InputSearchResult";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const appContext = useContext(AppContext);
  const {
    testArray,
    inputSearchValue,
    handleImageClick,
    imageIndex,
    imageView,
  } = appContext;

  const displaySearch = testArray.map((search, index) => (
    <div key={search.id}>
      <img
        src={search.urls.small}
        onClick={() => {
          handleImageClick(index);
        }}
      />
    </div>
  ));
  const inputSearchDisplay = `${inputSearchValue
    .slice(0, 1)
    .toUpperCase()}${inputSearchValue.slice(1).toLowerCase()}`;

  return (
    <>
      <div className="image-container">
        <div className="input-search-result">
          <InputSearchResult />
        </div>

        <h1>{inputSearchDisplay}</h1>
        <div className="grid-display">
          {inputSearchValue ? displaySearch : null}
        </div>
      </div>
      {imageView ? (
        <div className="image-gallery">
          <ImageGallery index={imageIndex} />
        </div>
      ) : null}
    </>
  );
};
export default SearchResults;
