import React, { createContext, ReactNode } from 'react';

export interface IAuth {
    handleLoginAction: () => void;
    handleRegisterAction: () => void;
}

export const AuthContext = createContext<IAuth | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const auth = {
        handleLoginAction: () => {
            console.log("Login action performed");
        },
        handleRegisterAction: () => {
            console.log("Register action performed");
        }
    };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};