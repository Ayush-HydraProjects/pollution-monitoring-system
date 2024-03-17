import React from 'react';
// import { Stacked } from '../components';
import { Typography, Box } from '@mui/material';

const WaterPollution = () => {
  return (
    <div className='mt-12'>
      <div className='flex gap-10 flex-wrap justify-center'>
        {/* <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <Stacked width="320px" height="360px" />
          </div>
        </div> */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h4'>Work in Progress</Typography>
          <Typography variant='subtitle1' pt={1}>
            This feature is currently under development.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default WaterPollution;
