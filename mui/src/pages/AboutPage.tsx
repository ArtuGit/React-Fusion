import { Typography, Paper, Box } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import StyledLink from '../components/StyledLink';

const AboutPage = () => {
  return (
    <MainLayout>
      <Paper sx={{ p: 3, textAlign: 'center', width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a React MUI TypeScript project built with modern best practices.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Technologies Used
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <StyledLink external to="https://reactjs.org">React</StyledLink>
            <StyledLink external to="https://mui.com">Material UI</StyledLink>
            <StyledLink external to="https://www.typescriptlang.org">TypeScript</StyledLink>
            <StyledLink external to="https://tanstack.com/query">TanStack Query</StyledLink>
          </Box>
          
          <Box sx={{ mt: 4 }}>
            <StyledLink to="/">Return to Home</StyledLink>
          </Box>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default AboutPage;
