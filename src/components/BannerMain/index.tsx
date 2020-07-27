import React from 'react';

import getYoutubeId from '../../utils/getYoutubeId';

import VideoIframeResponsive from './components/VideoIframeResponsive';

import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
  Description,
  Item,
  Title,
} from './styles';

interface IProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

const BannerMain: React.FC<IProps> = ({
  url,
  videoDescription,
  videoTitle,
}) => {
  const youtubeId = getYoutubeId(url);
  const backgroundUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={backgroundUrl}>
      <ContentAreaContainer>
        <Item>
          <Title>{videoTitle}</Title>
          <Description>{videoDescription}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive youtubeId={youtubeId} />
          <WatchButton>Assistir</WatchButton>
        </Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
