import { ReactNode } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import Header from '../components/Header';
import StyledLink from '../components/StyledLink';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth={false} component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', mt: 'auto' }}>
        <Container maxWidth={false}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Stack direction="row" spacing={3}>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </Stack>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} React MUI TypeScript Project
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
