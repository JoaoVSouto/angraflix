import React, { useState } from 'react';

import initialData from '../../../data/dados_iniciais.json';

import { Categories, Category } from './styles';

interface IInitialData {
  categorias: DataCategory[];
}

const { categorias } = initialData as IInitialData;

const CadastroCategoria: React.FC = () => {
  const [categories] = useState<DataCategory[]>(categorias);

  return (
    <>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label htmlFor="nome-categoria">
          Nome da categoria
          <input type="text" id="nome-categoria" />
        </label>

        <button type="submit">Cadastrar</button>
      </form>

      <Categories>
        <h3>Categorias</h3>
        {categories.map((category, index) => (
          <Category
            key={category.titulo}
            categoryColor={category.cor}
            animationDelay={index * 150}
          >
            {category.titulo}
          </Category>
        ))}
      </Categories>
    </>
  );
};

export default CadastroCategoria;
