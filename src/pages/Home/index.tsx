import React from 'react';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import initialData from '../../data/dados_iniciais.json';

interface IInitialData {
  categorias: DataCategory[];
}

const Home: React.FC = () => {
  const data = initialData as IInitialData;

  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores."
      />

      {data.categorias.map((category, index) => (
        <Carousel
          key={category.titulo}
          ignoreFirstVideo={index === 0}
          category={category}
        />
      ))}
      <Footer />
    </>
  );
};

export default Home;
