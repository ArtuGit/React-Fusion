import React, { createContext, ReactNode } from 'react';

export const StatContext = createContext<null>(null);

export const StatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const stats = [
    { label: "Points", value: 1250 },
    { label: "Level", value: 5 },
    { label: "Achievements", value: 8 },
    { label: "Streak", value: "7 days" },
  ];

  return (
    <StatContext.Provider value={stats}>
      {children}
    </StatContext.Provider>
  );
};