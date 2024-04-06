// WorkInProgressScreen.js

import React from 'react';

/**
 * WorkInProgressScreen.jsx
 * 
 * This React component represents a screen displayed during work in progress.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * Props:
 * - message: The message or description to display on the screen.
 * - isLoading: A boolean indicating whether the screen is in loading state.
 * 
 * Example Usage:
 * ```jsx
 * <WorkInProgressScreen
 *   message="This feature is currently under development."
 *   isLoading={false}
 * />
 * ```
 * 
 * Note:
 * - The `message` prop specifies the text to display on the screen.
 * - The `isLoading` prop controls whether a loading spinner is shown.
 */

const WorkInProgressScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='max-w-md text-center'>
        <h1 className='text-3xl font-bold mb-4'>Work in Progress</h1>
        <p className='text-lg text-gray-600'>
          Mobile view for this portal is currently under development. Please
          check back later.
        </p>
      </div>
    </div>
  );
};

export default WorkInProgressScreen;
