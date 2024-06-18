import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface BackgroundVideoProps {
  videoUrl: string;
  title: string;
  description: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoUrl, title, description }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          {description}
        </Typography>
      </Container>
    </Box>
  );
};

export default BackgroundVideo;
