import React, { forwardRef, useImperativeHandle } from 'react';
import { InteractiveClock, ClockMethods } from './InteractiveClock';

interface InteractiveClockDemoProps {
  sharedCount: number;
  currentTime: Date;  // Add this line
}

export const InteractiveClockDemo = forwardRef<ClockMethods, InteractiveClockDemoProps>(
  ({ sharedCount, currentTime }, ref) => {  // Add currentTime here
    return (
      <div>
        <h3>Interactive Clock Demo</h3>
        <InteractiveClock ref={ref} sharedCount={sharedCount} currentTime={currentTime} />
      </div>
    );
  }
);