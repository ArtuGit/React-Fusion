import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from './Header.tsx';

export const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid blue', // for debug
      }}
    >
      {/* Top section: 10% height, but at least 20rem */}
      <Box
        sx={{
          height: '10%',
          minHeight: '2.5rem',
          border: '1px solid red', // for debug
        }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};