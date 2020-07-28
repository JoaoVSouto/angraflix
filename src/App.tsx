import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './components/Menu';
import Footer from './components/Footer';

import Routes from './routes';

const Main = styled.main`
  background-color: #141414;
  color: var(--white);
  padding: 50px 5% 0;
`;

const App: React.FC = () => (
  <BrowserRouter>
    <Menu />

    <Main>
      <Routes />
    </Main>

    <Footer />
  </BrowserRouter>
);

export default App;
