import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  // Set up event handlers
  const onReady = (event) => {
    const player = event.target;
    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  //original dimensions height= 390  width= 640
  const opts = {
    height: '195',
    width: '320',
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      opts={opts}
    />
  );
};

export default YouTubePlayer;
