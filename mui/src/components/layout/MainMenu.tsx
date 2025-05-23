import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FC } from 'react';

const MainMenu: FC = () => (
  <List
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      width: '100%',
      p: 0,
    }}
    disablePadding
  >
    <ListItem button selected sx={{ width: 'auto' }}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
        <RocketLaunchIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Go!" />
    </ListItem>
    <ListItem button sx={{ width: 'auto' }}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
        <CloudUploadIcon color="action" />
      </ListItemIcon>
      <ListItemText primary="Upload" />
    </ListItem>
  </List>
);

export default MainMenu;
