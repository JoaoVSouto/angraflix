import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../pages/Home';

import HomeLayout from '../_layout/HomeLayout';

import CadastroRoutes from './cadastro.routes';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <HomeLayout>
        <Home />
      </HomeLayout>
    </Route>
    <Route path="/cadastro" component={CadastroRoutes} />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
