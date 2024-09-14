import React, { useState } from 'react';
import { PropagationForm } from './PropagationForm.tsx';
import { PropagationStatRes } from './PropagationStatRes.tsx';

interface FormData {
  textInput: string;
  numberInput: number;
  emailInput: string;
  passwordInput: string;
  textareaInput: string;
  selectInput: string;
  checkboxInput: boolean;
  radioInput: string;
  dateInput: string;
  colorInput: string;
}

export const Propagation: React.FC = () => {
  const [formState, setFormState] = useState<FormData>({
    textInput: '',
    numberInput: 0,
    emailInput: '',
    passwordInput: '',
    textareaInput: '',
    selectInput: '',
    checkboxInput: false,
    radioInput: '',
    dateInput: '',
    colorInput: '#000000',
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleFormChange = (data: FormData) => {
    setFormState(data);
  };

  const handleFormSubmit = (data: FormData) => {
    setSubmittedData(data);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 text-karaka">Propagation1 Demo</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <PropagationForm onSubmit={handleFormSubmit} onChange={handleFormChange} />
        </div>
        <div className="w-full md:w-1/2">
          <PropagationStatRes data={formState} />
        </div>
      </div>
      {submittedData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-karaka">Submitted Data</h2>
          <PropagationStatRes data={submittedData} />
        </div>
      )}
    </div>
  );
};