import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/App.css";
import PageHome from "./page-home";
import PageArtist from "./page-artist";
import PageSearchResult from "./page-search-results";
import Layout from "./components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/busqueda" component={PageSearchResult}></Route>
          <Route exact path="/artista" component={PageArtist}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
