import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

interface IProps {
  youtubeId: string;
}

const VideoIframeResponsive: React.FC<IProps> = ({ youtubeId }) => {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Dummy title"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default VideoIframeResponsive;
