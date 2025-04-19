import { Typography, Paper } from '@mui/material';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Paper sx={{ p: 3, textAlign: 'center', width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to React MUI
        </Typography>
        <Typography variant="body1">
          This is a foundation for a React MUI TypeScript project with dark/light mode support.
        </Typography>
      </Paper>
    </MainLayout>
  );
};

export default HomePage;
