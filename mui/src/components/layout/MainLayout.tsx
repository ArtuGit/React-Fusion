import { ReactNode } from 'react';
import { Box } from '@mui/material';

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
        {/* Place header or top content here if needed */}
      </Box>
      {/* Bottom section: takes the rest of the space */}
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