import React from 'react';
import { UserFormWrapper } from '../components/feature/user-form/UserFormWrapper.tsx';

const FormValidationPage: React.FC = () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Form Validation</h2>
            <UserFormWrapper />
        </>
    );
};

export default FormValidationPage;
