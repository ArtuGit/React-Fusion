import React, { useState, useRef, useEffect } from 'react';

interface PreviousValueProps {
  sharedCount: number;
  onIncrement: () => void;
}

export const PreviousValue: React.FC<PreviousValueProps> = ({ sharedCount, onIncrement }) => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  return (
    <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
      <h2 className="text-xl font-bold mb-4 text-karaka">Previous Value Demo</h2>
      <p className="text-karaka mb-2">Current count: {count}</p>
      <p className="text-karaka mb-2">Previous count: {prevCount}</p>
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