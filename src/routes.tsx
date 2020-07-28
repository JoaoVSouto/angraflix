import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
