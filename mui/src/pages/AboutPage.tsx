import { Typography, Paper } from '@mui/material';
import MainLayout from '../layouts/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout>
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          This is a React MUI TypeScript project built with modern best practices.
        </Typography>
      </Paper>
    </MainLayout>
  );
};

export default AboutPage;
