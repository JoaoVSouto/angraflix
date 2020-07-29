import React from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import initialData from '../../data/dados_iniciais.json';

interface IInitialData {
  categorias: DataCategory[];
}

const Home: React.FC = () => {
  const data = initialData as IInitialData;

  return (
    <>
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription="Unfinished Allegro (instrumental) foi a música de abertura do álbum Angels Cry, lançado em 1993."
      />

      {data.categorias.map((category, index) => (
        <Carousel
          key={category.titulo}
          ignoreFirstVideo={index === 0}
          category={category}
        />
      ))}
    </>
  );
};

export default Home;
