import React from 'react'
import './CustomButton.styles.scss'

interface IProps {
  type?: any
  onClick?: () => void
  inverted?: boolean
  isGoogleSignIn?: boolean
  className?: any
}

const CustomButton: React.FC<IProps> = ({ children, onClick, inverted, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
