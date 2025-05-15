import { FC } from 'react';
import { Box, CircularProgress, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import WordSlider from '../components/WordSlider';
import { api } from '../services/api.service';

export const WordLearningPage: FC = () => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words'],
    queryFn: api.getWords,
  });

  let content;
  if (isLoading || !words) {
    content = <CircularProgress size={60} />;
  } else {
    content = <WordSlider words={words} />;
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
        {content}
      </Box>
    </Container>
  );
};

export default WordLearningPage;