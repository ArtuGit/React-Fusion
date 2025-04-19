import { createContext } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ThemeContextType {
  toggleColorMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
