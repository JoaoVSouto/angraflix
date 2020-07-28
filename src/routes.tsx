import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cadastro/video" component={CadastroVideo} />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
