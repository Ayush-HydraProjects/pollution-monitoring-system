import React from 'react';
import { Typography, Box } from '@mui/material';

const WaterPollution = () => {
  return (
    <div className='mt-12'>
      <div className='flex gap-10 flex-wrap justify-center'>
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
