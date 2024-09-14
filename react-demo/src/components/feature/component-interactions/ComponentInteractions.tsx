import React, { useState, useRef } from 'react';
import { CounterWithHistory } from './CounterWithHistory';
import { InteractiveClockDemo, ClockMethods } from './InteractiveClockDemo';

export const ComponentInteractions: React.FC = () => {
  const [sharedCount, setSharedCount] = useState(0);
  const clockRef = useRef<ClockMethods>(null);

  const incrementSharedCount = () => {
    setSharedCount(prev => prev + 1);
    if (sharedCount % 5 === 4) { // Every 5th increment
      clockRef.current?.changeColor();
    }
    if (sharedCount % 10 === 9) { // Every 10th increment
      clockRef.current?.shake();
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-8">
        <CounterWithHistory sharedCount={sharedCount} onIncrement={incrementSharedCount} />
        <InteractiveClockDemo ref={clockRef} sharedCount={sharedCount} />
      </div>
    </div>
  );
};