import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<DataCategory[]>([]);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await api.get<DataCategory[]>('categorias');
      const videosResponse = await api.get<DataVideo[]>('videos');

      const categoriesMounted = categoriesResponse.data.map(category => ({
        ...category,
        videos: videosResponse.data.filter(
          video => video.categoriaId === category.id
        ),
      }));

      setCategories(categoriesMounted);
    })();
  }, []);

  return (
    <>
      {categories.length > 0 && (
        <>
          <BannerMain
            videoTitle={categories[0].videos[0].titulo}
            url={categories[0].videos[0].url}
            videoDescription={categories[0].videos[0].description || ''}
          />

          {categories.map((category, index) => (
            <Carousel
              key={category.id}
              ignoreFirstVideo={index === 0}
              category={category}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
