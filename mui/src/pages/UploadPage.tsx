import { FC } from 'react';
import { Box, Container } from '@mui/material';

import UploadInstruction from '../components/upload/UploadInstruction.tsx';

export const UploadPage: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          py: 4,
        }}
      >
        <UploadInstruction />
      </Box>
    </Container>
  );
};

export default UploadPage;
