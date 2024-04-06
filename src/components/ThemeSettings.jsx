import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/staticData';
import { useStateContext } from '../contexts/ContextProvider';
/**
 * ThemeSettings.jsx
 * 
 * This React component manages theme settings for the application.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * State Variables:
 * - theme: Stores the current theme (e.g., 'light' or 'dark').
 * - fontSize: Stores the font size setting (e.g., 'small', 'medium', 'large').
 * 
 * Functions:
 * - handleThemeChange: Handles theme change based on user selection.
 * - handleFontSizeChange: Handles font size change based on user selection.
 * 
 * Example Usage:
 * ```jsx
 * <ThemeSettings />
 * ```
 * 
 * Note:
 * - The component can be integrated into the application's settings page.
 * - Users can customize the theme and font size using the provided controls.
 */


const ThemeSettings = () => {
  const { setColor, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Settings</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        {/* <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div> */}
        <div className='p-4 border-t-1 border-color ml-4'>
          <p className='font-semibold text-xl '>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position='TopCenter'
              >
                <div
                  className='relative mt-2 cursor-pointer flex gap-5 items-center'
                  key={item.name}
                >
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
