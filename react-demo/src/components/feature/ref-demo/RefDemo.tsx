import React from 'react';
import { PreviousValue } from './PreviousValue';

export const RefDemo: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-8">
        <PreviousValue />
      </div>
    </div>
  );
};