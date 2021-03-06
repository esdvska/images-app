import React, { useContext } from "react";
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import AppContext from "../context/AppContext";

import "../styles/SearchResults.css";
const ImageGallery = ({ index }) => {
  const appContext = useContext(AppContext);
  const { testArray } = appContext;
  const [indexNumber, setIndexNumber] = useState(index);
  const handleGalleryNext = () => {
    if (indexNumber < testArray.length - 1) {
      setIndexNumber((prev) => prev + 1);
    } else {
      setIndexNumber(0);
    }
  };

  const handleGalleryPrev = () => {
    if (indexNumber > 0) {
      setIndexNumber((prev) => prev - 1);
    } else {
      setIndexNumber(testArray.length - 1);
    }
  };

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
      break;
      monthDisplay = "July";
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
  }

  return (
    <div className="image-gallery">
      <div className="img-full">
        <p className="p-up">{testArray[index].user.name}</p>
        <div className="prev" onClick={handleGalleryPrev}>
          <FcPrevious />
        </div>
        <img
          src={testArray[indexNumber].urls.regular}
          alt={testArray[indexNumber].alt_description}
        ></img>
        <div className="next" onClick={handleGalleryNext}>
          <FcNext />
        </div>
        <div className="p-down">
          <p>
            {monthDisplay} {testArray[indexNumber].created_at.slice(0, 4)}
          </p>
          <p>Location:</p>
        </div>
      </div>
    </div>
  );
};
export default ImageGallery;
