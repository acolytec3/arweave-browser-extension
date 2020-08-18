import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BrowserPage from './components/browserpage'
import Popup from './components/popup'

const App = () => {

  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() =>
           //@ts-ignore
            <Popup />} />
          <Route path="/mainpage" render={(routeProps) =>
            <BrowserPage route="pages" />} />
        </Switch>
      </HashRouter>
  );
}

export default App;
