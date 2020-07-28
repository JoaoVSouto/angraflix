import React from 'react';
import { Link } from 'react-router-dom';

const CadastroVideo: React.FC = () => {
  return (
    <>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </>
  );
};

export default CadastroVideo;
