import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  playing: boolean;
  url: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ playing, url }) => {
  return (
    <ReactPlayer url={url} playing={playing} width='100%' height='100%' loop />
  );
};
