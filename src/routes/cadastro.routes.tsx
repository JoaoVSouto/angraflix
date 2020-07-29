import React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';

import CadastroLayout from '../_layout/CadastroLayout';

import Categoria from '../pages/Cadastro/Categoria';
import Video from '../pages/Cadastro/Video';

const CadastroRoutes: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <CadastroLayout>
      <Switch>
        <Route path={`${match.path}/video`} component={Video} />
        <Route path={`${match.path}/categoria`} component={Categoria} />

        <Redirect to="/" />
      </Switch>
    </CadastroLayout>
  );
};

export default CadastroRoutes;
