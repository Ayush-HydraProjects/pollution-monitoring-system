import React from 'react';

/**
 * Navbar.jsx
 * 
 * This React component represents a navigation bar for a web application.
 * 
 * Dependencies:
 * - React
 * - react-router-dom
 * - @mui/material
 * 
 * Props:
 * - links: An array of objects representing navigation links (e.g., { label: 'Home', url: '/' }).
 * - logoUrl: The URL of the logo image to display.
 * 
 * Example Usage:
 * ```jsx
 * <Navbar
 *   links={[
 *     { label: 'Home', url: '/' },
 *     { label: 'About', url: '/about' }
 *   ]}
 *   logoUrl="/images/logo.png"
 * />
 * ```
 * 
 * Note:
 * - The `links` prop should be an array of objects with `label` and `url` properties.
 * - The `logoUrl` prop defines the URL of the logo image to display.
 */

const Navbar = () => {
  return (
    <div className='landing-page'>
      <div className='content'>
        <h1 className='welcome'>
          Monitor the Environment: Pollution Tracking System
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
