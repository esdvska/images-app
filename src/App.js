// applicationId: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
// secret: "XtS5mIkqYwP9N1X1ZiUoRzL75Z9JhjgS9-sQ_kJfBEo",

import React, { useContext } from "react";
import AppContext from "./context/AppContext";
import SearchArea from "./components/SearchArea";
import SearchResults from "./components/SearchResults";
import TextUnderInput from "./components/TextUnderInput";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const App = () => {
  const appContext = useContext(AppContext);
  const {
    searchChange,
    testArray,
    inputSearchValue,
    searchPhrase,
    handleEnter,
  } = appContext;

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
              <InputSearch />
              {/* <div className="div-input">
                {" "}
                &#xf002;
                <input
                  type="text"
                  placeholder="Search free high-resolution photos"
                  value={inputSearchValue}
                  onChange={searchPhrase}
                  onKeyDown={handleEnter}
                ></input>
              </div> */}
              {inputSearchValue.length > 3 ? (
                <SearchArea />
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
