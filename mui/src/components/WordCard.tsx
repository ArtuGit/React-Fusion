import { FC } from 'react';
import { Card, CardContent, Typography, Box, styled } from '@mui/material';

interface WordCardProps {
  languageOneWord: string;
  languageTwoWord: string;
}

// Styled components for custom card sections
const CardSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  width: '100%',
}));

const UpperSection = styled(CardSection)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.divider}`,
  background: theme.palette.primary.main,
}));

const LowerSection = styled(CardSection)(({ theme }) => ({
  background: theme.palette.secondary.main,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  margin: '2rem auto',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[10],
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const WordTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 500,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const WordCard: FC<WordCardProps> = ({ languageOneWord, languageTwoWord }) => {
  return (
    <StyledCard>
      <CardContent sx={{ padding: 0 }}>
        <UpperSection>
          <WordTypography variant="h1" color="text.primary">
            {languageOneWord}
          </WordTypography>
        </UpperSection>
        <LowerSection>
          <WordTypography variant="h1" color="background.paper">
            {languageTwoWord}
          </WordTypography>
        </LowerSection>
      </CardContent>
    </StyledCard>
  );
};

export default WordCard; 