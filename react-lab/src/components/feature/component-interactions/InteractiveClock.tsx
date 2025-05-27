import React, {useImperativeHandle, forwardRef, useState } from 'react';

export interface ClockMethods {
  changeColor: () => void;
  shake: () => void;
}

interface InteractiveClockProps {
  sharedCount: number;
  currentTime: Date;
}

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

export const InteractiveClock = forwardRef<ClockMethods, InteractiveClockProps>(({ sharedCount, currentTime }, ref) => {

  const [color, setColor] = useState(colors[0]);
  const [isShaking, setIsShaking] = useState(false);

  useImperativeHandle(ref, () => ({
    changeColor: () => {
      const newColor = colors[(colors.indexOf(color) + 1) % colors.length];
      setColor(newColor);
    },
    shake: () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 820);
    },
  }));

  return (
    <div
      className={`text-6xl font-bold p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isShaking ? 'animate-shake' : ''
      }`}
      style={{ backgroundColor: color }}
    >
      {currentTime.toLocaleTimeString()}
      <div className="text-2xl mt-2">Shared Count: {sharedCount}</div>
    </div>
  );
});