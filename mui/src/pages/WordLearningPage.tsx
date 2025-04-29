import { FC } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import WordSlider from '../components/WordSlider';
import { api } from '../services/api.service';

export const WordLearningPage: FC = () => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words'],
    queryFn: api.getWords,
  });

  if (isLoading || !words) {
    return (
        <Box
          sx={{
              minHeight: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}
        >
          <CircularProgress size={60} />
        </Box>
    );
  }

  return (
      <Box
        sx={{
          minHeight: '500px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WordSlider words={words} />
      </Box>
  );
};

export default WordLearningPage; 