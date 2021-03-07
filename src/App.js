// applicationId: "GG4NHIsZTd4-4UfG3Luk0DAOkg7_NyML_bXfsjnfEJ4",
// secret: "XtS5mIkqYwP9N1X1ZiUoRzL75Z9JhjgS9-sQ_kJfBEo",

import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import SearchResults from "./components/SearchResults";

import Home from "./pages/Home";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/images-app" exact component={Home}></Route>
          <Route path="/images-app/results" component={SearchResults}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
