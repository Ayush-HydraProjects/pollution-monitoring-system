import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {};
/**
 * ContextProvider.js
 * 
 * This file contains a React context provider component for managing global application state.
 * 
 * Dependencies:
 * - React
 * 
 * State Variables:
 * - user: Stores information about the currently logged-in user.
 * - theme: Stores the current theme (e.g., 'light' or 'dark').
 * - settings: Stores additional user settings (e.g., language preference).
 * 
 * Functions:
 * - login: Handles user login and updates the user state.
 * - logout: Handles user logout and clears the user state.
 * - setTheme: Updates the theme state based on user preference.
 * - updateSettings: Updates user settings (e.g., language preference).
 * 
 * Example Usage:
 * ```jsx
 * <ContextProvider>
 *   <App />
 * </ContextProvider>
 * ```
 * 
 * Note:
 * - The `user` state should include properties like `id`, `username`, and `email`.
 * - The `theme` state should be managed globally for consistent theming.
 * - Additional settings can be added to the `settings` state as needed.
 */


export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isMobile, setMobileView] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        isMobile,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        setMobileView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
