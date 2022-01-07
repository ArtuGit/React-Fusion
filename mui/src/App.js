import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#cfe8fc',
            height: '100vh'
          }}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="first-name" label="First Name" variant="outlined"/>
              <TextField id="last-name" label="Last Name" variant="outlined"/>
              <Container sx={{my: 3}} maxWidth="sm">
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              </Container>
            </Box>
          </Box>
        </Container>
    </div>
  );
}

export default App;
