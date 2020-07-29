import React from 'react';

import { FiExternalLink } from 'react-icons/fi';

import { Container } from './styles';

import logo from '../../assets/img/footer_logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="http://www.angra.net/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Angra" />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <strong>
          <a
            href="https://www.alura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imersão React da Alura{' '}
            <FiExternalLink color="#fff" strokeWidth={3} />
          </a>
        </strong>
      </p>
    </Container>
  );
};

export default Footer;
