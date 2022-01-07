import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center', bgcolor: '#cfe8fc', height: '100vh' }}>
            <Button width="40%" variant="contained" color="primary">
              Hello World
            </Button>
          </Box>
        </Container>
    </div>
  );
}

export default App;
