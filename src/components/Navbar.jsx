import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className='landing-page'>
      <div className='content'>
        <h1 className='welcome'>
          Monitor the Environment: Pollution Tracking Platform
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
