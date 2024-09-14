import React, { useState, useRef, useEffect } from 'react';

interface CounterWithHistoryProps {
  sharedCount: number;
  onIncrement: () => void;
}

export const CounterWithHistory: React.FC<CounterWithHistoryProps> = ({ sharedCount, onIncrement }) => {
  const [localCount, setLocalCount] = useState(0);
  const previousCountRef = useRef<number>();

  useEffect(() => {
    previousCountRef.current = localCount;
  }, [localCount]);

  const previousCount = previousCountRef.current;

  const handleIncrement = () => {
    setLocalCount(localCount + 1);
    onIncrement();
  };

  return (
    <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
      <h2 className="text-xl font-bold mb-4 text-karaka">Counter with History</h2>
      <p className="text-karaka mb-2">Current count: {localCount}</p>
      <p className="text-karaka mb-2">Previous count: {previousCount}</p>
      <p className="text-karaka mb-4">Shared count: {sharedCount}</p>
      <button
        onClick={handleIncrement}
        className="py-2 px-4 bg-flush-orange text-white rounded-md hover:bg-amber transition-colors"
      >
        Increment
      </button>
    </div>
  );
};