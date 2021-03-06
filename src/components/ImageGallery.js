import React, { useContext } from "react";
import AppContext from "../context/AppContext";
const ImageGallery = ({ index }) => {
  const appContext = useContext(AppContext);
  const { testArray } = appContext;
  return (
    <div className="image-gallery">
      <div>
        <img src={testArray[index].urls.regular}></img>
      </div>
    </div>
  );
};
export default ImageGallery;
