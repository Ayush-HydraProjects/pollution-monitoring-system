import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';

import { links } from '../data/staticData';
import { useStateContext } from '../contexts/ContextProvider';
import { Box } from '@mui/material';

/**
 * Sidebar.jsx
 * 
 * This React component represents a sidebar navigation menu.
 * 
 * Dependencies:
 * - React
 * - react-router-dom
 * - @mui/material
 * 
 * Props:
 * - items: An array of objects representing sidebar menu items (e.g., { label: 'Home', url: '/' }).
 * - activeItem: The currently active menu item.
 * - onItemClick: A callback function triggered when a menu item is clicked.
 * 
 * Example Usage:
 * ```jsx
 * <Sidebar
 *   items={[
 *     { label: 'Home', url: '/' },
 *     { label: 'About', url: '/about' }
 *   ]}
 *   activeItem="/"
 *   onItemClick={handleItemClick}
 * />
 * ```
 * 
 * Note:
 * - The `items` prop should be an array of objects with `label` and `url` properties.
 * - The `activeItem` prop specifies the currently active menu item.
 * - The `onItemClick` prop defines the callback function to be executed when a menu item is clicked.
 */

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <Box pt={1} className='flex justify-between'>
            <Link
              to='/'
              onClick={handleCloseSideBar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware /> <span>Track Pollution</span>
            </Link>
            {/* <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent> */}
          </Box>
          <div className='mt-10 '>
            {links.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className='capitalize '>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
