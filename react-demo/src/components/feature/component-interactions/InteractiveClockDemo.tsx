import React, { forwardRef } from 'react';
import { InteractiveClock, ClockMethods } from './InteractiveClock';

export const InteractiveClockDemo = forwardRef<ClockMethods, { sharedCount: number }>(
  ({ sharedCount }, ref) => {
    return (
      <div className="bg-peach p-6 rounded-lg shadow-[4px_4px_0_0_#ffc100]">
        <h2 className="text-xl font-bold mb-4 text-karaka">Interactive Clock Demo</h2>
        <InteractiveClock ref={ref} sharedCount={sharedCount} />
        <div className="mt-4 space-x-4">
          <p className="text-karaka mb-2">
            The clock color changes every 5 increments, and shakes every 10 increments.
          </p>
        </div>
      </div>
    );
  }
);