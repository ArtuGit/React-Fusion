import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DialogBox from './components/DialogBox'
import './App.css';


function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <DialogBox/>
        </Container>
    </div>
  );
}

export default App;
