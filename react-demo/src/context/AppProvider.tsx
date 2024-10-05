import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {StatProvider} from "./StatProvider.tsx";

interface AppContextType {
  currentTime: Date;
  handleLoginAction: () => void;
  handleRegisterAction: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLoginAction = () => {
    console.log("Login action performed");
  };

  const handleRegisterAction = () => {
    console.log("Register action performed");
  };

  return (
    <AppContext.Provider value={{ currentTime, handleLoginAction, handleRegisterAction }}>
      <StatProvider>
        {children}
      </StatProvider>
    </AppContext.Provider>
  );
};