import { Paper } from '@mui/material';
import { FC } from 'react';

const UploadForm: FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      Work in progress. Please check back later for the upload functionality.
    </Paper>
  );
};

export default UploadForm;
