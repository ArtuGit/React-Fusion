import { ReactNode, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorMode, ThemeContext as ThemeContext1 } from '../types/theme.types.ts';

interface ThemeProviderProps {
  children: ReactNode;
}

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ColorMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext1 value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext1>
  );
}
