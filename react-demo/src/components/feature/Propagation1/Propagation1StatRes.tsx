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

export const Propagation1StatRes: React.FC<Propagation1StatResProps> = ({ data }) => {
  return (
    <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
      <h2 className="text-xl font-bold mb-4 text-karaka">Current Form State</h2>
      <ul className="space-y-2 text-karaka">
        <li><strong>Username:</strong> {data.textInput}</li>
        <li><strong>Age:</strong> {data.numberInput}</li>
        <li><strong>Email:</strong> {data.emailInput}</li>
        <li><strong>Password:</strong> {data.passwordInput.replace(/./g, '*')}</li>
        <li><strong>Bio:</strong> {data.textareaInput}</li>
        <li><strong>Country:</strong> {data.selectInput}</li>
        <li><strong>Subscribe to newsletter:</strong> {data.checkboxInput ? 'Yes' : 'No'}</li>
        <li><strong>Preferred contact method:</strong> {data.radioInput}</li>
        <li><strong>Birth Date:</strong> {data.dateInput || 'Not set'}</li>
        <li>
          <strong>Favorite Color:</strong> 
          <span className="ml-2 inline-block w-6 h-6 rounded-full border border-amber" style={{ backgroundColor: data.colorInput }}></span>
        </li>
      </ul>
    </div>
  );
};