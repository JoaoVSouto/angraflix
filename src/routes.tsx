import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />

    <Redirect from="*" to="/" />
  </BrowserRouter>
);

export default Routes;
