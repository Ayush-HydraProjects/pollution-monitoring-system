import React from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="contact-us">
        <h2 className='con'>Contact Us</h2>
        <div className="social-links">
          <a href="https://twitter.com/jaahanava"><img src="https://cdn.dribbble.com/users/2652449/screenshots/14764078/twitter.gif" alt='twitter' /></a>

          <a href="https://www.linkedin.com/in/jaahanava-joshi-10/"><img src="https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif" alt='linkedin' /></a>

          <a href="https://www.instagram.com/jaahanava/"><img src="https://media1.tenor.com/images/f26b2768c4f985a9349c3db3b2ef6a75/tenor.gif?itemid=12518165" alt='instagram' /></a>

          <a href="https://www.facebook.com/jaahanava.joshi.3"><img src="https://www.pinclipart.com/picdir/big/528-5284537_computer-icons-facebook-inc-logo-fb-png-hd.png" alt='facebook' /></a>

        </div>
      </div>
      <div className="made-by">
        <p>Made by Jaahanava Joshi</p>
      </div>
    </footer>
  );

};

export default Footer;
