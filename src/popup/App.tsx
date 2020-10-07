import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BrowserPage from './components/browserpage'
import Popup from './components/popup'
import { theme, CSSReset, ThemeProvider } from '@chakra-ui/core'


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() =>          
            <Popup />} />
          <Route path="/mainpage" render={(routeProps) =>
            <BrowserPage route="pages" />} />
        </Switch>
      </HashRouter>
      </ThemeProvider>
  );
}

export default App;
