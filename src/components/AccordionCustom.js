import React from 'react';

import { MdExpandMore } from 'react-icons/md';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

/**
 * AccordionCustom.js
 * 
 * This React component is a customized accordion element that displays collapsible content.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * Props:
 * - title: The title of the accordion section.
 * - content: The content to be displayed when the accordion is expanded.
 * - expanded: A boolean indicating whether the accordion is initially expanded.
 * - onChange: A callback function to handle changes in the accordion state.
 * 
 * Example Usage:
 * ```jsx
 * <AccordionCustom
 *   title="FAQ"
 *   content="Frequently asked questions about our product."
 *   expanded={false}
 *   onChange={handleAccordionChange}
 * />
 * ```
 * 
 * Note:
 * - The `title` prop specifies the title of the accordion section.
 * - The `content` prop defines the content to be displayed when the accordion is expanded.
 * - The `expanded` prop determines whether the accordion is initially expanded or collapsed.
 * - The `onChange` prop is a callback function that handles changes in the accordion state.
 */


function AccordionCustom({
  title,
  secondaryTitle,
  children,
  expanded,
  handleChange,
  sx,
}) {
  return (
    <>
      <Accordion
        sx={{ boxShadow: 'none', ...sx }}
        expanded={expanded}
        onChange={handleChange}
      >
        <AccordionSummary
          // expandIcon={<MdExpandMore />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            '& .MuiAccordionSummary-content': {
              justifyContent: 'center',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            },
          }}
        >
          <Grid container mr={2}>
            <Grid
              item
              xs={12}
              md={secondaryTitle ? 8 : 12}
              lg={secondaryTitle ? 9.5 : 12}
            >
              {title}
            </Grid>
            {secondaryTitle && (
              <Grid item xs={12} md={4} lg={2.5}>
                {secondaryTitle}
              </Grid>
            )}
          </Grid>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
}
AccordionCustom.propTypes = {
  title: PropTypes.element,
  children: PropTypes.any,
  expanded: PropTypes.bool,
  handleChange: PropTypes.func,
  sx: PropTypes.object,
  secondaryTitle: PropTypes.element,
};
export default AccordionCustom;
