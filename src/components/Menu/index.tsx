import React from 'react';
import { Link } from 'react-router-dom';

import { NavMenu, Logo, ButtonLink } from './styles';

import logo from '../../assets/img/logo.png';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <Logo to="/">
        <img src={logo} alt="AluraFlix" />
      </Logo>

      <ButtonLink as={Link} to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </NavMenu>
  );
};

export default Menu;
