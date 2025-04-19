import { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { ThemeContext } from '../types/theme.types.ts';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };
  
  const getButtonStyles = (path: string) => {
    const isActive = isActivePath(path);
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      borderBottom: isActive ? `2px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}` : 'none',
      backgroundColor: isActive ? 
        (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)') : 
        'transparent',
      '&:hover': { 
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.05)'
      }
    };
  };

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React MUI TypeScript
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/"
            sx={getButtonStyles('/')}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/about"
            sx={getButtonStyles('/about')}
          >
            About
          </Button>
          {colorMode && (
            <IconButton 
              sx={{ 
                ml: 1,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(30deg)'
                }
              }} 
              onClick={colorMode.toggleColorMode} 
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
