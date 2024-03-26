// WorkInProgressScreen.js

import React from 'react';

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
