import React, { useContext } from 'react';
import { ComponentInteractions } from "../components/feature/component-interactions/ComponentInteractions.tsx";
import {TimeContext} from "../context/TimeProvider.tsx";

const ComponentInteractionsPage: React.FC = () => {
    const currentTime = useContext(TimeContext);

    if (!currentTime) {
        return null;
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Component Interactions</h2>
            <ComponentInteractions currentTime={currentTime} />
        </>
    );
};

export default ComponentInteractionsPage;
