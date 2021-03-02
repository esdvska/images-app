// applicationId: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
// secret: "XtS5mIkqYwP9N1X1ZiUoRzL75Z9JhjgS9-sQ_kJfBEo",

import React, { useState } from "react";
import { createApi } from "unsplash-js";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const App = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const searchPhrase = () => {};
  const api = createApi({
    accessKey: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
  });

  const textSearch = "Search free high-resolution photos";

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
              placeholder="   &#xf002;   Search free high-resolution photos"
              value={inputSearchValue}
              onChange={searchPhrase}
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
