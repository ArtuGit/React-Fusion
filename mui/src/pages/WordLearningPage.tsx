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
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WordSlider words={words} />
      </Box>
    </Container>
  );
};

export default WordLearningPage; 