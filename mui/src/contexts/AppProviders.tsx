import { FC, ReactNode } from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default AppProviders;
