import { FC } from 'react';
import { Container, Box } from '@mui/material';
import WordCard from '../components/WordCard';

export const WordLearningPage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <WordCard
          languageOneWord="Dzień dobry"
          languageTwoWord="Good morning"
        />
      </Box>
    </Container>
  );
};

export default WordLearningPage; 