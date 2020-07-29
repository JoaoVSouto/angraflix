import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonLink as GenericButtonLink } from '../Button';

export const NavMenu = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 60px;
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 168px;
  }

  @media (max-width: 800px) {
    > img {
      max-width: 152px;
    }
  }
`;

export const ButtonLink = styled(GenericButtonLink)`
  color: var(--white);
  border: 1px solid var(--white);

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;
