import React from 'react';

import { NavMenu, Logo, ButtonLink } from './styles';

import logo from '../../assets/img/logo.png';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <Logo href="/">
        <img src={logo} alt="AluraFlix" />
      </Logo>

      <ButtonLink href="#!">Novo vídeo</ButtonLink>
    </NavMenu>
  );
};

export default Menu;
