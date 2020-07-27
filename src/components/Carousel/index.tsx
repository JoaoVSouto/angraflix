import React from 'react';

import VideoCard from './components/VideoCard';

import {
  ExtraLink,
  Title,
  VideoCardGroupContainer,
  VideoCardList,
} from './styles';

interface IProps {
  ignoreFirstVideo?: boolean;
  category?: DataCategory;
}

const Carousel: React.FC<IProps> = ({ category, ignoreFirstVideo }) => {
  const categoryTitle = category?.titulo;
  const categoryColor = category?.cor;
  const categoryExtraLink = category?.link_extra;
  const videos = category?.videos;

  return (
    <VideoCardGroupContainer>
      {category && (
        <>
          <Title categoryColor={categoryColor}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}

      <VideoCardList>
        {videos?.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
