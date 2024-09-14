import React, { useState, useRef, useEffect } from 'react';

export const PreviousValue: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
      <h2 className="text-xl font-bold mb-4 text-karaka">Previous Value Demo</h2>
      <p className="text-karaka mb-2">Current count: {count}</p>
      <p className="text-karaka mb-4">Previous count: {prevCount}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="py-2 px-4 bg-flush-orange text-white rounded-md hover:bg-amber transition-colors"
      >
        Increment
      </button>
    </div>
  );
};