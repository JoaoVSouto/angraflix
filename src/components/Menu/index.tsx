import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavMenu, Logo, ButtonLink } from './styles';

import logo from '../../assets/img/logo.png';

const Menu: React.FC = () => {
  const location = useLocation();

  const isCadastroVideo = useMemo(
    () => location.pathname === '/cadastro/video',
    [location]
  );

  return (
    <NavMenu>
      <Logo to="/">
        <img src={logo} alt="AluraFlix" />
      </Logo>

      <ButtonLink
        as={Link}
        to={isCadastroVideo ? '/cadastro/categoria' : '/cadastro/video'}
      >
        {isCadastroVideo ? 'Nova categoria' : 'Novo vídeo'}
      </ButtonLink>
    </NavMenu>
  );
};

export default Menu;
