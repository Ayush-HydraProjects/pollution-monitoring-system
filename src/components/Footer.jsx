import React from 'react';

/**
 * Footer.jsx
 * 
 * This React component represents the footer section of a web page.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * Props:
 * - copyright: The copyright text to display in the footer.
 * - links: An array of objects representing footer links (e.g., { label: 'Privacy Policy', url: '/privacy' }).
 * 
 * Example Usage:
 * ```jsx
 * <Footer
 *   copyright="© 2024 My Company"
 *   links={[
 *     { label: 'Privacy Policy', url: '/privacy' },
 *     { label: 'Terms of Service', url: '/terms' }
 *   ]}
 * />
 * ```
 * 
 * Note:
 * - The `copyright` prop specifies the copyright text to display.
 * - The `links` prop should be an array of objects with `label` and `url` properties.
 */

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contact-us'>
        <h2 className='con'>Contact Us</h2>
        <div className='social-links'>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <img
              src='https://cdn.dribbble.com/users/2652449/screenshots/14764078/twitter.gif'
              alt='twitter'
            />
          </a>

          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif'
              alt='linkedin'
            />
          </a>

          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://media1.tenor.com/images/f26b2768c4f985a9349c3db3b2ef6a75/tenor.gif?itemid=12518165'
              alt='instagram'
            />
          </a>

          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://www.pinclipart.com/picdir/big/528-5284537_computer-icons-facebook-inc-logo-fb-png-hd.png'
              alt='facebook'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
