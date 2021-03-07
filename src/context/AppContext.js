import React, { useState, useEffect } from "react";

import { createApi } from "unsplash-js";

const AppContext = React.createContext();
const api = createApi({
  accessKey: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
});
export const AppProvider = (props) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [testArray, setTestArray] = useState([]);
  const [searchChange, setSearchChange] = useState(false);
  const [imageView, setImageView] = useState(false);
  const [imageIndex, setImageIndex] = useState("");

  const fetchApi = async () => {
    if (inputSearchValue.length > 3) {
      api.search
        .getPhotos({ query: inputSearchValue })
        .then((result) => {
          if (result.length !== 0) {
            setTestArray(result.response.results);
            console.log(result.response);
          }
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  };

  useEffect(() => {
    fetchApi();
  }, [inputSearchValue]);

  const searchPhrase = (e) => {
    setInputSearchValue(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") setSearchChange(true);
  };
  const handleImageClick = (index) => {
    setImageView((prev) => !prev);
    setImageIndex(index);
  };
  const handleBack = () => {
    setSearchChange(false);
    testArray.length = 0;
  };
  return (
    <AppContext.Provider
      value={{
        inputSearchValue,
        testArray,
        searchChange,
        fetchApi,
        searchPhrase,
        handleEnter,
        setInputSearchValue,
        setSearchChange,
        handleImageClick,
        handleBack,
        imageView,
        imageIndex,
        redirect,
        history,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
