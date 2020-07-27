import React from 'react';

import { VideoCardContainer } from './styles';

import getYoutubeId from '../../../../utils/getYoutubeId';

interface IProps {
  videoTitle: string;
  videoURL: string;
  categoryColor?: string;
}

const VideoCard: React.FC<IProps> = ({
  videoTitle,
  videoURL,
  categoryColor,
}) => {
  const image = `https://img.youtube.com/vi/${getYoutubeId(
    videoURL
  )}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      categoryColor={categoryColor}
      href={videoURL}
      target="_blank"
      rel="noopener noreferrer"
      title={videoTitle}
    />
  );
};

export default VideoCard;
