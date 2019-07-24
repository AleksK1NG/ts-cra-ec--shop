import React from 'react'

import './CartDropdown.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'

const CartDropdown: React.FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
