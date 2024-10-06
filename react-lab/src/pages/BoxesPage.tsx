import React from 'react';
import { Boxes } from '../components/feature/boxes/Boxes/Boxes.tsx';

const BoxesPage: React.FC = () => {

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Boxes</h2>
            <Boxes amount={15}/>
        </>
    );
};

export default BoxesPage;
