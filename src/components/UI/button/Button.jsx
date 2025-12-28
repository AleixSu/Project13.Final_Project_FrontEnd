import React from 'react'
import './Button.css'
const Button = ({ key, text, className, fnc }) => {
  return (
    <button key={key} className={`mainButton ${className}`} onClick={fnc}>
      {text}
    </button>
  )
}

export default Button
