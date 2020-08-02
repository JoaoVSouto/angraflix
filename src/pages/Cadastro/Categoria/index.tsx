import React, { useState } from 'react';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import initialData from '../../../data/dados_iniciais.json';

import { Categories, Category, SubmitButton } from './styles';

type InputChangeHandlerEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IInitialData {
  categorias: DataCategory[];
}

interface ICategoryInfo {
  name: string;
  description: string;
  descriptionUrl: string;
  color: string;
}

const initialCategoryInfo: ICategoryInfo = {
  color: '#b52d2f',
  description: '',
  descriptionUrl: '',
  name: '',
};

const { categorias } = initialData as IInitialData;

const CadastroCategoria: React.FC = () => {
  const [categoryInfo, setCategoryInfo] = useState<ICategoryInfo>(
    initialCategoryInfo
  );
  const [categories, setCategories] = useState<DataCategory[]>(categorias);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const categoryNameTrimmed = categoryInfo.name.trim();

    const existsCategoryWithSameName = categories.find(
      category =>
        category.titulo.toLowerCase() === categoryNameTrimmed.toLowerCase()
    );

    if (existsCategoryWithSameName) {
      return;
    }

    const categoryData: DataCategory = {
      titulo: categoryInfo.name,
      videos: [],
      cor: categoryInfo.color,
      link_extra: {
        text: categoryInfo.description,
        url: categoryInfo.descriptionUrl,
      },
      addedNow: true,
    };

    setCategories([...categories, categoryData]);
    setCategoryInfo(initialCategoryInfo);
    document
      .querySelectorAll('.filled')
      .forEach(elem => elem.classList.remove('filled'));
  };

  const handleInputChange = (e: InputChangeHandlerEvent): void => {
    if (e.target.value) {
      e.target.classList.add('filled');
    } else {
      e.target.classList.remove('filled');
    }

    setCategoryInfo({
      ...categoryInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Nova categoria</h1>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Nome da categoria"
          id="categoria-name"
          value={categoryInfo.name}
          onChange={handleInputChange}
          required
        />

        <Textarea
          label="Descrição"
          name="description"
          id="categoria-desc"
          value={categoryInfo.description}
          onChange={handleInputChange}
        />

        <Input
          type="url"
          name="descriptionUrl"
          label="URL da descrição"
          id="categoria-desc-link"
          value={categoryInfo.descriptionUrl}
          onChange={handleInputChange}
          hideBehind={!categoryInfo.description}
          disabled={!categoryInfo.description}
        />

        <Input
          type="color"
          name="color"
          label="Cor"
          id="categoria-color"
          value={categoryInfo.color}
          onChange={handleInputChange}
        >
          <div
            className="color-swatch"
            style={{ backgroundColor: categoryInfo.color }}
          />
        </Input>

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </form>

      <Categories>
        <h3>Categorias</h3>
        {categories.map((category, index) => (
          <Category
            key={category.titulo}
            categoryColor={category.cor}
            animationDelay={category.addedNow ? 0 : index * 100}
          >
            {category.titulo}
          </Category>
        ))}
      </Categories>
    </>
  );
};

export default CadastroCategoria;
