import React, { useContext } from 'react';
import { ComponentInteractions } from "../components/feature/component-interactions/ComponentInteractions.tsx";
import { AppContext } from '../context/AppContext';
import { Boxes } from '../components/feature/boxes/Boxes/Boxes.tsx';

const BoxesPage: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error(`${BoxesPage.name} must be used within an AppProvider`);
    }

    const { currentTime } = context;

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Boxes</h2>
            <Boxes amount={15}/>
        </>
    );
};

export default BoxesPage;
