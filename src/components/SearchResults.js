import React, { useContext, useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import AppContext from "../context/AppContext";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const appContext = useContext(AppContext);
  const { testArray, inputSearchValue } = appContext;
  const displaySearch = testArray.map((search) => ({
    src: search.urls.small,
    width: search.width,
    height: search.height,

    // <div key={search.id}>
    //   <img src={search.urls.small}></img>
    // </div>
  }));
  console.log(displaySearch);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="image-container">
      <h1>{inputSearchValue}</h1>
      <div>
        <Gallery
          photos={displaySearch}
          direction={"column"}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={displaySearch.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};
export default SearchResults;
