import React from 'react'
import { IButton, _buttonTypes } from './types';

export default function Button({ children, hidden, onClick, type, value }: IButton) {
  const buttonClasses: { [key in _buttonTypes]: string } = {
    numeric: 'numeric-button',
    special: 'special-button',
    operation: 'operation-button',
  }

  return (
    <button
      className={buttonClasses[type]}
      name={value}
      onClick={onClick}
      style={{visibility: hidden ? 'hidden' : 'visible'}}
    >
      {children}
    </button>
  )
}