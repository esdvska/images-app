import React, { useContext, useState, useCallback } from "react";

import AppContext from "../context/AppContext";
import ImageGallery from "./ImageGallery";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const appContext = useContext(AppContext);
  const { testArray, inputSearchValue } = appContext;
  const [imageView, setImageView] = useState(false);
  const [imageIndex, setImageIndex] = useState("");
  const handleImageClick = (index) => {
    setImageView((prev) => !prev);
    setImageIndex(index);
  };
  const displaySearch = testArray.map((search, index) => (
    <div key={search.id}>
      <img
        src={search.urls.small}
        onClick={() => {
          handleImageClick(index);
        }}
      />
      <button>tag</button>
    </div>
  ));

  return (
    <>
      <div className="image-container">
        <h1>{inputSearchValue}</h1>
        <div className="grid-display">{displaySearch}</div>
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
