import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { PollutionTable, SensorInformation } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import WaterPollution from './pages/Waterpollution';
import Home from './pages/Home';
import AirPollution from './pages/AirPollution';
import WorkInProgressScreen from './components/WorkInProgressScreen';

/**
 * App.js
 *
 * This is the main entry point for the React application.
 *
 * Dependencies:
 * - React
 * - react-router-dom
 * - @mui/material
 *
 * Components:
 * - Header: Displays the application header.
 * - Sidebar: Displays the sidebar navigation menu.
 * - Content: Renders the main content of the application.
 *
 * Example Usage:
 * ```jsx
 * <App />
 * ```
 *
 * Note:
 * - The `Header`, `Sidebar`, and `Content` components are imported from other files.
 * - The `App` component serves as the main container for the entire application.
 */

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    themeSettings,
    isMobile,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  const { setActiveMenu, setScreenSize, screenSize, setMobileView } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
      setMobileView(true);
    } else {
      setMobileView(false);
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu, setMobileView]);

  return isMobile ? (
    <WorkInProgressScreen />
  ) : (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            {/* <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className='text-3xl text-black p-3 hover:drop-shadow-xl hover:bg-gray-400'
              >
                <FiSettings />
              </button>
            </TooltipComponent> */}
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div
              className='fixed bg-main-bg dark:bg-main-dark-bg navbar w-full'
              style={{ width: 'calc(100% - 18rem)' }}
            >
              <Navbar />
            </div>
            <div style={{ paddingTop: '80px' }}>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path='/' element={<Home />} />
                <Route path='/AirPollutionChart' element={<AirPollution />} />
                <Route
                  path='/WaterPollutionChart'
                  element={<WaterPollution />}
                />

                {/* pages  */}
                <Route
                  path='/PollutionDataTable'
                  element={<PollutionTable />}
                />
                <Route
                  path='/SensorInformation'
                  element={<SensorInformation />}
                />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
