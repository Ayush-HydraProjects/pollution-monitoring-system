import React from 'react';
import { Typography, Box } from '@mui/material';

/**
 * WaterPollution.jsx
 *
 * This is a simple React component that displays a "Work in Progress" message.
 *
 * Dependencies:
 * - React
 * - @mui/material
 *
 * Functions:
 * - None
 *
 * State Variables:
 * - None
 *
 * Component Return:
 * - The component returns a div element that contains a Box component and Typography components.
 * - The Typography components display a "Work in Progress" message and a description.
 *
 * Example Usage:
 * ```jsx
 * <WaterPollution />
 * ```
 *
 * Note:
 * - This component is currently under development.
 */

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
