import React from 'react';
import LineChart from './LineChart';


const AirPollution = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  );
};

export default AirPollution;
