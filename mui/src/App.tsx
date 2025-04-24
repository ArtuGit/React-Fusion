import { Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <Routes>
      </Routes>
    </AppThemeProvider>
  );
}

export default App;
