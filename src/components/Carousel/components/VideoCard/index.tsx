import React, { useMemo } from 'react';

import { VideoCardContainer, VideoTitle } from './styles';

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

  const videoTitleEllipsed = useMemo(
    () =>
      videoTitle.length > 50 ? `${videoTitle.slice(0, 50)}...` : videoTitle,
    [videoTitle]
  );

  return (
    <>
      <VideoCardContainer
        url={image}
        categoryColor={categoryColor}
        href={videoURL}
        target="_blank"
        rel="noopener noreferrer"
        title={videoTitle}
      />

      <VideoTitle>{videoTitleEllipsed}</VideoTitle>
    </>
  );
};

export default VideoCard;
