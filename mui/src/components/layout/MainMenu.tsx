import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
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
        <HomeIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button sx={{ width: 'auto' }}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
        <SchoolIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary="Learn" />
    </ListItem>
    <ListItem button sx={{ width: 'auto' }}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
        <SettingsIcon color="action" />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
);

export default MainMenu;
