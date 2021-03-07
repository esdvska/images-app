import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import SearchArea from "../components/SearchArea";

import TextUnderInput from "../components/TextUnderInput";
import InputSearch from "../components/InputSearch";
import { Redirect } from "react-router";

const Home = () => {
  const appContext = useContext(AppContext);
  const {
    searchChange,
    testArray,
    inputSearchValue,
    // searchPhrase,
    // handleEnter,
  } = appContext;

  return (
    <>
      {searchChange && testArray.length !== 0 ? (
        <Redirect push to={{ pathname: "/results" }} />
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

              {inputSearchValue.length > 3 ? (
                <SearchArea />
              ) : (
                <TextUnderInput />
              )}
            </div>
          </div>
        </main>
      )}
      )
    </>
  );
};

export default Home;
