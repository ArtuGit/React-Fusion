import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', mt: 'auto' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} React MUI TypeScript Project
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
