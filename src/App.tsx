import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Menu from './components/Menu';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Menu />

      <Routes />

      <Footer />
    </BrowserRouter>

    <ToastContainer autoClose={3000} />
  </>
);

export default App;
