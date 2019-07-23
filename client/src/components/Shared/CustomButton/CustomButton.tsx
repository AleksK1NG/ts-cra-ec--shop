import React from 'react'
import './CustomButton.styles.scss'

interface IProps {
  otherProps?: any
  type?: string
}

const CustomButton: React.FC<IProps> = ({ otherProps, children }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
