import React, { useState } from "react";
import { createApi } from "unsplash-js";
import { GoSearch } from "react-icons/go";

import "./App.css";
// applicationId: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
// secret: "XtS5mIkqYwP9N1X1ZiUoRzL75Z9JhjgS9-sQ_kJfBEo",
const App = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const api = createApi({
    accessKey: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
  });
  return (
    <div className="app">
      <main>
        <div className="main-div">
          <div className="main-wrapper">
            <h1>Unsplash</h1>
            <h4>
              The internet's source of <span>freely-usable images.</span>
              <br></br>Powered by creators everywhere.
            </h4>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              value={inputSearchValue}
            ></input>
            <p>
              <strong>Trending: </strong>flower, wallpapers, backgrounds, happy,
              love
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
