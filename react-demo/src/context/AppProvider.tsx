import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  currentTime: Date;
  stats: { label: string; value: number | string }[];
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

  const stats = [
    { label: "Points", value: 1250 },
    { label: "Level", value: 5 },
    { label: "Achievements", value: 8 },
    { label: "Streak", value: "7 days" },
  ];

  const handleLoginAction = () => {
    console.log("Login action performed");
  };

  const handleRegisterAction = () => {
    console.log("Register action performed");
  };

  return (
    <AppContext.Provider value={{ currentTime, stats, handleLoginAction, handleRegisterAction }}>
      {children}
    </AppContext.Provider>
  );
};