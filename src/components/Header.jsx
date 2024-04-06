import React from 'react'
/**
 * Header.jsx
 * 
 * This React component represents the header section of a web page.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * Props:
 * - title: The title to display in the header.
 * - subtitle: The subtitle to display below the title.
 * - logoUrl: The URL of the logo image to display.
 * 
 * Example Usage:
 * ```jsx
 * <Header
 *   title="My Website"
 *   subtitle="Welcome to our site!"
 *   logoUrl="/images/logo.png"
 * />
 * ```
 * 
 * Note:
 * - The `title` prop specifies the main title of the header.
 * - The `subtitle` prop provides additional information below the title.
 * - The `logoUrl` prop defines the URL of the logo image to display.
 */

const Header = ({title}) => {
  return (
    <div className='mb-10'>
      
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
        {title}
      </p>
    </div>
  )
}

export default Header