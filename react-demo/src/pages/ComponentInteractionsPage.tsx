import React, { useContext } from 'react';
import { ComponentInteractions } from "../components/feature/component-interactions/ComponentInteractions.tsx";
import { AppContext } from '../context/AppContext';

const ComponentInteractionsPage: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error(`${ComponentInteractionsPage.name} must be used within an AppProvider`);
    }

    const { currentTime } = context;

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Component Interactions</h2>
            <ComponentInteractions currentTime={currentTime} />
        </>
    );
};

export default ComponentInteractionsPage;
