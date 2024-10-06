import React from 'react';

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

interface Propagation1StatResProps {
  data: FormData;
}

export const UserFormState: React.FC<Propagation1StatResProps> = ({ data }) => {
  return (
    <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
      <h2 className="text-xl font-bold mb-4 text-karaka">Current Form State</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-karaka">
        <div>
          <strong>Username:</strong> {data.textInput}
        </div>
        <div>
          <strong>Age:</strong> {data.numberInput}
        </div>
        <div>
          <strong>Email:</strong> {data.emailInput}
        </div>
        <div>
          <strong>Password:</strong> {data.passwordInput.replace(/./g, '*')}
        </div>
        <div className="col-span-1 md:col-span-2">
          <strong>Bio:</strong> {data.textareaInput}
        </div>
        <div>
          <strong>Country:</strong> {data.selectInput}
        </div>
        <div>
          <strong>Subscribe to newsletter:</strong> {data.checkboxInput ? 'Yes' : 'No'}
        </div>
        <div>
          <strong>Preferred contact method:</strong> {data.radioInput}
        </div>
        <div>
          <strong>Birth Date:</strong> {data.dateInput || 'Not set'}
        </div>
        <div>
          <strong>Favorite Color:</strong> 
          <span className="ml-2 inline-block w-6 h-6 rounded-full border border-amber" style={{ backgroundColor: data.colorInput }}></span>
        </div>
      </div>
    </div>
  );
};