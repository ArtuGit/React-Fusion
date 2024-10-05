import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {StatisticsProvider} from "./StatisticsProvider.tsx";
import {TimerProvider} from "./TimeProvider.tsx";

export interface AppContextType {
  handleLoginAction: () => void;
  handleRegisterAction: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const handleLoginAction = () => {
    console.log("Login action performed");
  };

  const handleRegisterAction = () => {
    console.log("Register action performed");
  };

  return (
    <AppContext.Provider value={{ handleLoginAction, handleRegisterAction }}>
      <StatisticsProvider>
        <TimerProvider>
          {children}
        </TimerProvider>
      </StatisticsProvider>
    </AppContext.Provider>
  );
};