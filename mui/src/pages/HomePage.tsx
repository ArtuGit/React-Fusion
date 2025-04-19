import { Typography, Paper, Box } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import StyledLink from '../components/StyledLink';

const HomePage = () => {
  return (
    <MainLayout>
      <Paper sx={{ p: 3, textAlign: 'center', width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to React MUI
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a foundation for a React MUI TypeScript project with dark/light mode support.
        </Typography>
        
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">
            Example Links with Hover Effects
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <StyledLink to="/about">Internal Link to About</StyledLink>
            <StyledLink external to="https://mui.com">External Link to MUI</StyledLink>
            <StyledLink external to="https://reactjs.org">React Documentation</StyledLink>
            <StyledLink external to="https://www.typescriptlang.org">TypeScript</StyledLink>
          </Box>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default HomePage;
