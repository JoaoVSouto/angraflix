import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a
        href="https://www.alura.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante a <strong>Imersão React da Alura</strong>
      </p>
    </Container>
  );
};

export default Footer;
