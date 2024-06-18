import React from 'react';
import { CssBaseline } from '@mui/material';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import video from '../../assets/video.mp4'

export const Video: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <BackgroundVideo
        videoUrl={video}
        title=""
        description=""
      />
    </>
  );
};
