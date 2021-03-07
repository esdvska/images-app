import React, { useContext } from "react";
import { useState } from "react";

import { VscClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import AppContext from "../context/AppContext";

import "../styles/SearchResults.css";

const ImageGallery = ({ index }) => {
  const appContext = useContext(AppContext);
  const { testArray, handleImageClick } = appContext;
  const [indexNumber, setIndexNumber] = useState(index);
  const handleGalleryNext = () => {
    if (indexNumber < testArray.length - 1) {
      setIndexNumber((prev) => prev + 1);
    } else {
      setIndexNumber(0);
    }
  };
  let url = testArray[indexNumber].urls.small;

  const handleGalleryPrev = () => {
    if (indexNumber > 0) {
      setIndexNumber((prev) => prev - 1);
    } else {
      setIndexNumber(testArray.length - 1);
    }
  };
  // const handleCloseView = () => {
  //   setImageView((prev) => !prev);
  // };

  const month = testArray[indexNumber].created_at.slice(5, 7);
  let monthDisplay = "";

  switch (month) {
    case "01": {
      monthDisplay = "January";
      break;
    }
    case "02": {
      monthDisplay = "February";
      break;
    }
    case "03": {
      monthDisplay = "March";
      break;
    }
    case "04": {
      monthDisplay = "April";
      break;
    }
    case "05": {
      monthDisplay = "May";
      break;
    }
    case "06": {
      monthDisplay = "June";
      break;
    }
    case "07": {
      monthDisplay = "July";
      break;
    }
    case "08": {
      monthDisplay = "August";
      break;
    }
    case "09": {
      monthDisplay = "September";
      break;
    }
    case "10": {
      monthDisplay = "October";
      break;
    }
    case "11": {
      monthDisplay = "November";
      break;
    }
    case "12": {
      monthDisplay = "December";
      break;
    }
    default: {
      monthDisplay = "";
      break;
    }
  }

  return (
    <div className="image-gallery">
      <VscClose id="close" onClick={handleImageClick} />
      <div className="img-full">
        <p className="p-up">{testArray[index].user.name}</p>
        <div className="prev" onClick={handleGalleryPrev}>
          <VscChevronLeft id="arrow" />
        </div>
        <img
          src={testArray[indexNumber].urls.regular}
          alt={testArray[indexNumber].alt_description}
        ></img>
        <div className="next" onClick={handleGalleryNext}>
          <VscChevronRight id="arrow" />
        </div>
        <div className="p-down">
          <p>
            {monthDisplay} {testArray[indexNumber].created_at.slice(0, 4)} -
            Location: {testArray[indexNumber].user.location}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ImageGallery;
