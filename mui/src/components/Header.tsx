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
      backgroundColor: isActive 
        ? (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)') 
        : 'transparent',
      padding: '8px 16px',
      margin: '0 8px',
      minWidth: '80px',
      textAlign: 'center',
      height: '40px',
      lineHeight: '24px',
      boxSizing: 'border-box',
      '&:hover': { 
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      }
    };
  };

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          React MUI TypeScript
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', '& > a': { position: 'relative' } }}>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/"
              disableRipple
              sx={getButtonStyles('/')}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/about"
              disableRipple
              sx={getButtonStyles('/about')}
            >
              About
            </Button>
          </Box>
          {colorMode && (
            <IconButton 
              sx={{ 
                ml: 2,
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                }
              }} 
              onClick={colorMode.toggleColorMode}
              disableRipple 
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
