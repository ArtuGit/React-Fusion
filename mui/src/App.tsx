import { Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <AppThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppThemeProvider>
  );
}

export default App;
