import { useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  useTheme 
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React MUI TypeScript
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          {colorMode && (
            <IconButton 
              sx={{ ml: 1 }} 
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