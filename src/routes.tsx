import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
