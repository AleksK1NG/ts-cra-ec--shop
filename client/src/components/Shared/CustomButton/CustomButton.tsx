import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles'

interface IProps {
  type?: any
  onClick?: () => void
  inverted?: boolean
  isGoogleSignIn?: boolean
  className?: any
}

const CustomButton: React.FC<IProps> = ({ children, onClick, inverted, isGoogleSignIn, ...otherProps }) => {
  return (
    <CustomButtonContainer
      onClick={onClick}
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
