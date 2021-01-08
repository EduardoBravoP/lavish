import React from 'react'
import './styles.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLORS = ['primary', 'blue', 'red', 'green']

export const Button = ({
  children, 
  type, 
  handleButtonClick, 
  buttonStyle, 
  buttonSize, 
  buttonColor 
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null

  return (
    <button 
      className={`btn 
        ${checkButtonStyle} 
        ${checkButtonSize} 
        ${checkButtonColor}
      `} 
      onClick={handleButtonClick} 
      type={type}
    >
      {children}
    </button>
  )
}
