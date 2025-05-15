import { ReactNode } from 'react';
import { Box } from '@mui/material';

export const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};