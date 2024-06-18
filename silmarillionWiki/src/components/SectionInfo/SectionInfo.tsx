import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface ImageSliderProps {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

export const SectionInfo: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', margin: 'auto' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            display: index === currentIndex ? 'block' : 'none',
            position: 'relative',
          }}
        >
          <img
            src={image.src}
            alt={image.title}
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '10%',
              transform: 'translateY(-50%)',
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <Typography variant="h4">{image.title}</Typography>
            <Typography variant="body1">{image.description}</Typography>
          </Box>
        </Box>
      ))}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: '#fff',
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: '#fff',
        }}
      >
        <ArrowForward />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '3em',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.5)',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

