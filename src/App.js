// applicationId: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
// secret: "XtS5mIkqYwP9N1X1ZiUoRzL75Z9JhjgS9-sQ_kJfBEo",

import React, { useState, useEffect } from "react";

import { createApi } from "unsplash-js";

import SearchArea from "./components/SearchArea";
import TextUnderInput from "./components/TextUnderInput";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [testArray, setTestArray] = useState([]);
  const [searchChange, setSearchChange] = useState(false);

  const api = createApi({
    accessKey: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
  });

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
  return (
    <div className="app">
      {searchChange && testArray.length !== 0 ? (
        <SearchResults />
      ) : (
        <main>
          <div className="main-div">
            <div className="main-wrapper">
              <h1>Unsplash</h1>
              <h4>
                The internet's source of <span>freely-usable images.</span>
                <br></br>Powered by creators everywhere.
              </h4>
              <div className="div-input">
                {" "}
                &#xf002;
                <input
                  type="text"
                  placeholder="Search free high-resolution photos"
                  value={inputSearchValue}
                  onChange={searchPhrase}
                  onKeyDown={handleEnter}
                ></input>
              </div>
              {inputSearchValue.length > 3 ? (
                <SearchArea test={testArray} />
              ) : (
                <TextUnderInput />
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
