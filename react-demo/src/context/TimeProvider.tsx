import React, {createContext, ReactNode, useEffect, useState} from 'react';


export const TimeContext = createContext<Date | null>(null);

export const TimerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <TimeContext.Provider value={currentTime}>
            {children}
        </TimeContext.Provider>
    );
};