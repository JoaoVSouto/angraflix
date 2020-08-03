import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { useForm } from '../../../hooks/useForm';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import { Categories, Category, SubmitButton } from './styles';

type InputChangeHandlerEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface ICategoryInfo {
  name: string;
  description: string;
  descriptionUrl: string;
  color: string;
  token?: string;
}

const initialCategoryInfo: ICategoryInfo = {
  color: '#b52d2f',
  description: '',
  descriptionUrl: '',
  name: '',
  token: '',
};

const CadastroCategoria: React.FC = () => {
  const history = useHistory();

  const [categoryInfo, setCategoryInfo, resetCategoryInfo] = useForm<
    ICategoryInfo
  >(initialCategoryInfo);

  const [categories, setCategories] = useState<DataCategory[]>([]);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await api.get<DataCategory[]>('categorias');

      setCategories(categoriesResponse.data);
    })();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();

      const categoryNameTrimmed = categoryInfo.name.trim();

      const existsCategoryWithSameName = categories.find(
        category =>
          category.titulo.toLowerCase() === categoryNameTrimmed.toLowerCase()
      );

      if (existsCategoryWithSameName) {
        toast.error('Opa! Já existe uma categoria com esse nome.');
        return;
      }

      const categoryData = {
        id: Math.floor(Math.random() * 1000) + 20,
        titulo: categoryNameTrimmed,
        videos: [],
        cor: categoryInfo.color,
        link_extra: {
          text: categoryInfo.description,
          url: categoryInfo.descriptionUrl,
        },
        addedNow: true,
      };

      await api.post('categorias', {
        titulo: categoryNameTrimmed,
        cor: categoryInfo.color,
        link_extra: {
          text: categoryInfo.description.trim(),
          url: categoryInfo.descriptionUrl.trim(),
        },
        token: categoryInfo.token,
      });

      setCategories([...categories, categoryData]);
      resetCategoryInfo();
      document
        .querySelectorAll('.filled')
        .forEach(elem => elem.classList.remove('filled'));

      toast.success('Categoria cadastrada com sucesso!');
      history.push('/');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Erro ao cadastrar categoria.');
    }
  };

  const handleInputChange = (e: InputChangeHandlerEvent): void => {
    if (e.target.value) {
      e.target.classList.add('filled');
    } else {
      e.target.classList.remove('filled');
    }

    setCategoryInfo(e.target);
  };

  return (
    <>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Título"
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

        <Input
          type="text"
          name="token"
          label="Token"
          id="categoria-token"
          value={categoryInfo.token}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </form>

      <Categories>
        <h3>Categorias</h3>
        {categories.map((category, index) => (
          <Category
            key={category.id}
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
