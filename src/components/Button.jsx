import React from 'react'

/**
 * Button.jsx
 * 
 * This React component represents a customizable button.
 * 
 * Props:
 * - label: The text displayed on the button.
 * - onClick: A callback function triggered when the button is clicked.
 * - color: The color of the button (e.g., 'primary', 'secondary', 'default').
 * - disabled: A boolean indicating whether the button is disabled.
 * 
 * Example Usage:
 * ```jsx
 * <Button
 *   label="Click me"
 *   onClick={handleButtonClick}
 *   color="primary"
 *   disabled={false}
 * />
 * ```
 * 
 * Note:
 * - The `label` prop specifies the text displayed on the button.
 * - The `onClick` prop defines the callback function to be executed when the button is clicked.
 * - The `color` prop determines the button's color theme.
 * - The `disabled` prop controls whether the button is clickable or disabled.
 */

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
    type='button'
    style={{backgroundColor:bgColor, color, borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button