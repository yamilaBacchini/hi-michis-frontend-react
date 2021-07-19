import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import MenuToolBar from "./components/Shared/MenuToolBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdoptionCats from './components/AdoptionCats/AdoptionCats';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div>
        <MenuToolBar />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/adoption-cats" component={AdoptionCats} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));