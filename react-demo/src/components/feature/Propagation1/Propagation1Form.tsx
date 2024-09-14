import React, { useState, FormEvent } from 'react';

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

interface Propagation1FormProps {
  onSubmit: (data: FormData) => void;
  onChange: (data: FormData) => void;
}

export const Propagation1Form: React.FC<Propagation1FormProps> = ({ onSubmit, onChange }) => {
  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prevData => {
      const newData = { ...prevData, [name]: newValue };
      onChange(newData);
      return newData;
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ff8200]">
      <div>
        <label htmlFor="textInput" className="block text-sm font-medium text-karaka">Username</label>
        <input type="text" id="textInput" name="textInput" value={formData.textInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3" />
      </div>

      <div>
        <label htmlFor="numberInput" className="block text-sm font-medium text-karaka">Age</label>
        <input type="number" id="numberInput" name="numberInput" value={formData.numberInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3" />
      </div>

      <div>
        <label htmlFor="emailInput" className="block text-sm font-medium text-karaka">Email</label>
        <input type="email" id="emailInput" name="emailInput" value={formData.emailInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3" />
      </div>

      <div>
        <label htmlFor="passwordInput" className="block text-sm font-medium text-karaka">Password</label>
        <input type="password" id="passwordInput" name="passwordInput" value={formData.passwordInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3" />
      </div>

      <div>
        <label htmlFor="textareaInput" className="block text-sm font-medium text-karaka">Bio</label>
        <textarea id="textareaInput" name="textareaInput" value={formData.textareaInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3 py-2"></textarea>
      </div>

      <div>
        <label htmlFor="selectInput" className="block text-sm font-medium text-karaka">Country</label>
        <select id="selectInput" name="selectInput" value={formData.selectInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3">
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
      </div>

      <div>
        <label className="flex items-center">
          <input type="checkbox" name="checkboxInput" checked={formData.checkboxInput} onChange={handleChange} className="rounded border-amber text-flush-orange shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50" />
          <span className="ml-2 text-sm text-karaka">Subscribe to newsletter</span>
        </label>
      </div>

      <div>
        <span className="block text-sm font-medium text-karaka">Preferred contact method</span>
        <div className="mt-2 space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="radioInput" value="email" checked={formData.radioInput === 'email'} onChange={handleChange} className="text-flush-orange border-amber focus:ring-flush-orange" />
            <span className="ml-2 text-sm text-karaka">Email</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="radioInput" value="phone" checked={formData.radioInput === 'phone'} onChange={handleChange} className="text-flush-orange border-amber focus:ring-flush-orange" />
            <span className="ml-2 text-sm text-karaka">Phone</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="dateInput" className="block text-sm font-medium text-karaka">Birth Date</label>
        <input type="date" id="dateInput" name="dateInput" value={formData.dateInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50 px-3" />
      </div>

      <div>
        <label htmlFor="colorInput" className="block text-sm font-medium text-karaka">Favorite Color</label>
        <input type="color" id="colorInput" name="colorInput" value={formData.colorInput} onChange={handleChange} className="mt-1 block w-full rounded-md border-amber shadow-sm focus:border-flush-orange focus:ring focus:ring-flush-orange focus:ring-opacity-50" />
      </div>

      <button type="submit" className="w-full py-2 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-flush-orange hover:bg-amber focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flush-orange">
        Submit
      </button>
    </form>
  );
};